/* "use strict";

const escapeRegex = (text) => {
  return String(text).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = (req, res, next) => {
  const query = req.query || {};

   1. PARSE FILTERS 
  const rawFilter = query.filter && typeof query.filter === "object" ? query.filter : {};
  for (let key in query) {
    const match = key.match(/^filter\[(.*?)\]$/);
    if (match) rawFilter[match[1]] = query[key];
  }

  const dbFilter = {};
  for (let key in rawFilter) {
    if (typeof rawFilter[key] === "string" && rawFilter[key].trim() !== "") {
      // Case-insensitive exact match for MongoDB
      dbFilter[key] = new RegExp(`^${escapeRegex(rawFilter[key])}$`, "i");
    } else {
      dbFilter[key] = rawFilter[key];
    }
  }

   2. PARSE SEARCHES 
  const rawSearch = {};
  const search = {};

  if (query.search && typeof query.search === "object") {
    for (let key in query.search) {
      if (typeof query.search[key] === "string" && query.search[key].trim() !== "") {
        rawSearch[key] = query.search[key];
        search[key] = { $regex: escapeRegex(query.search[key]), $options: "i" };
      }
    }
  }

  for (let key in query) {
    const match = key.match(/^search\[(.*?)\]$/);
    if (match && typeof query[key] === "string" && query[key].trim() !== "") {
      const fieldName = match[1];
      rawSearch[fieldName] = query[key];
      search[fieldName] = { $regex: escapeRegex(query[key]), $options: "i" };
    }
  }

  3. SORTING 
  const sort = query.sort && typeof query.sort === "object" ? query.sort : {};

   4. PAGINATION 
  let limit = Number(query.limit);
  limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20);

  let page = Number(query.page);
  page = page > 0 ? page - 1 : 0;

  let skip = Number(query.skip);
  skip = skip > 0 ? skip : page * limit;

  DB HELPER FUNCTIONS 

  res.getModelList = async (Model, customFilter = {}, populate = null) => {
    const finalQuery = { ...dbFilter, ...search, ...customFilter };
    return await Model.find(finalQuery)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  };

  res.getModelListDetails = async (Model, customFilter = {}) => {
    const finalQuery = { ...dbFilter, ...search, ...customFilter };

    const totalRecords = await Model.countDocuments(finalQuery);
    const totalPages = Math.ceil(totalRecords / limit) || 1;

    let details = {
      filter: rawFilter, 
      search: rawSearch,
      sort,
      skip,
      limit,
      page: page + 1,
      pages: {
        previous: page > 0 ? page : false,
        current: page + 1,
        next: page + 2 <= totalPages ? page + 2 : false,
        total: totalPages,
      },
      totalRecords,
    };

    if (totalRecords <= limit) {
      details.pages = false;
    }

    return details;
  };

  next();
}; */

"use strict";

const escapeRegex = (text) => {
  return String(text).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const BOOLEAN_FIELDS = new Set(["available"]);

const NUMBER_FIELDS = new Set(["year", "mileAge", "boughtPrice", "requiredPrice", "soldPrice"]);

const KEYWORD_SEARCHABLE_FIELDS = [
  "brandName",
  "model",
  "fuelType",
  "typeOfCar",
  "transmission",
  "color",
];

module.exports = (req, res, next) => {
  const query = req.query || {};

  /* 1. PARSE FILTERS */
  const rawFilter =
    query.filter && typeof query.filter === "object" ? query.filter : {};
  for (let key in query) {
    const match = key.match(/^filter\[(.*?)\]$/);
    if (match) rawFilter[match[1]] = query[key];
  }

  const dbFilter = {};
  for (let key in rawFilter) {
    const val = rawFilter[key];

    if (BOOLEAN_FIELDS.has(key)) {
      if (val === "true")  { dbFilter[key] = true;  continue; }
      if (val === "false") { dbFilter[key] = false; continue; }
      continue;
    }

    if (NUMBER_FIELDS.has(key)) {
      if (typeof val === "object") {
        dbFilter[key] = {};
        if (val.gte !== undefined) dbFilter[key].$gte = Number(val.gte);
        if (val.lte !== undefined) dbFilter[key].$lte = Number(val.lte);
      } else {
        const num = Number(val);
        if (!isNaN(num)) dbFilter[key] = num;
      }
      continue;
    }

    if (typeof val === "string" && val.trim() !== "") {
      dbFilter[key] = new RegExp(`^${escapeRegex(val)}$`, "i");
    }
  }

  /* 2. PARSE SEARCHES */
  const rawSearch = {};
  const search = {};

  if (query.search && typeof query.search === "object") {
    for (let key in query.search) {
      if (
        typeof query.search[key] === "string" &&
        query.search[key].trim() !== ""
      ) {
        rawSearch[key] = query.search[key];
        search[key] = { $regex: escapeRegex(query.search[key]), $options: "i" };
      }
    }
  }

  for (let key in query) {
    const match = key.match(/^search\[(.*?)\]$/);
    if (match && typeof query[key] === "string" && query[key].trim() !== "") {
      const fieldName = match[1];
      rawSearch[fieldName] = query[key];
      search[fieldName] = { $regex: escapeRegex(query[key]), $options: "i" };
    }
  }

  /* 3. KEYWORD SEARCH */
  const keywordRaw = query.keyword;
  if (typeof keywordRaw === "string" && keywordRaw.trim() !== "") {
    const trimmed = keywordRaw.trim().slice(0, 100);
    const regex = { $regex: escapeRegex(trimmed), $options: "i" };

    search["$or"] = KEYWORD_SEARCHABLE_FIELDS.map((field) => ({
      [field]: regex,
    }));

    rawSearch["keyword"] = trimmed;
  }

  /* 4. SORTING */
  const sort =
    query.sort && typeof query.sort === "object" ? query.sort : {};

  /* 5. PAGINATION */
  let limit = Number(query.limit);
  limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20);

  let page = Number(query.page);
  page = page > 0 ? page - 1 : 0;

  let skip = Number(query.skip);
  skip = skip > 0 ? skip : page * limit;

  res.getModelList = async (Model, customFilter = {}, populate = null) => {
    const finalQuery = { ...dbFilter, ...search, ...customFilter };
    return await Model.find(finalQuery)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  };

  res.getModelListDetails = async (Model, customFilter = {}) => {
    const finalQuery = { ...dbFilter, ...search, ...customFilter };

    const totalRecords = await Model.countDocuments(finalQuery);
    const totalPages = Math.ceil(totalRecords / limit) || 1;

    let details = {
      filter: rawFilter,
      search: rawSearch,
      sort,
      skip,
      limit,
      page: page + 1,
      pages: {
        previous: page > 0 ? page : false,
        current: page + 1,
        next: page + 2 <= totalPages ? page + 2 : false,
        total: totalPages,
      },
      totalRecords,
    };

    if (totalRecords <= limit) {
      details.pages = false;
    }

    return details;
  };

  next();
};