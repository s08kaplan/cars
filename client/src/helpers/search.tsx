import axios from "axios";

export type CarSearchParams = {
  keyword?:      string;
  brandName?:    string;
  model?:        string;
  fuelType?:     string;
  transmission?: string;
  typeOfCar?:    string;
  color?:        string;
  year?:         number;
  available?:    boolean;
  features?:     string[];
  minYear?:      number;
  maxYear?:      number;
  minPrice?:     number;
  maxPrice?:     number;
  minMileage?:   number;
  maxMileage?:   number;
};


const FUEL_TYPES: Record<string, string> = {
  electric: "Electric",
  diesel:   "Diesel",
  gasoline: "Gasoline",
  petrol:   "Gasoline", 
  hybrid:   "Hybrid",
  lpg:      "LPG",
};

const TRANSMISSIONS: Record<string, string> = {
  manual:    "Manual",
  automatic: "Automatic",
  auto:      "Automatic", // alias
};

const CAR_TYPES: Record<string, string> = {
  sedan:     "Sedan",
  suv:       "SUV",
  hatchback: "Hatchback",
  coupe:     "Coupe",
  van:       "Van",
  pickup:    "Pickup",
  truck:     "Pickup",
};

const COLORS: Record<string, string> = {
  silver: "Silver",
  black:  "Black",
  white:  "White",
  red:    "Red",
  blue:   "Blue",
  green:  "Green",
  gray:   "Gray",
  grey:   "Gray",
  yellow: "Yellow",
  orange: "Orange",
};


export const parseQueryString = (input: string): CarSearchParams => {
  const params: CarSearchParams = {};
  const tokens = input.trim().toLowerCase().split(/\s+/);
  const unmatched: string[] = [];

  for (const token of tokens) {
    if (!token) continue;

    if (FUEL_TYPES[token]) {
      params.fuelType = FUEL_TYPES[token];
      continue;
    }

    if (TRANSMISSIONS[token]) {
      params.transmission = TRANSMISSIONS[token];
      continue;
    }

    if (CAR_TYPES[token]) {
      params.typeOfCar = CAR_TYPES[token];
      continue;
    }

    if (COLORS[token]) {
      params.color = COLORS[token];
      continue;
    }

    if (/^\d{4}$/.test(token)) {
      const year = parseInt(token);
      if (year >= 1980 && year <= 2099) {
        params.year = year;
        continue;
      }
    }

    unmatched.push(token);
  }

  if (unmatched.length > 0) {
    params.keyword = unmatched.join(" ");
  }

  return params;
};


const SEARCH_FIELD_MAP: Partial<Record<keyof CarSearchParams, string>> = {
  brandName:    "brandName",
  model:        "model",
  fuelType:     "fuelType",
  transmission: "transmission",
  typeOfCar:    "typeOfCar",
  color:        "color",
  year:         "year",
  available:    "available",
};

const RANGE_FIELD_MAP: {
  param: keyof CarSearchParams;
  field: string;
  op: "gte" | "lte";
}[] = [
  { param: "minYear",    field: "year",          op: "gte" },
  { param: "maxYear",    field: "year",          op: "lte" },
  { param: "minPrice",   field: "requiredPrice", op: "gte" },
  { param: "maxPrice",   field: "requiredPrice", op: "lte" },
  { param: "minMileage", field: "mileAge",       op: "gte" },
  { param: "maxMileage", field: "mileAge",       op: "lte" },
];

const buildSearchQuery = (params: CarSearchParams): string => {
  const parts: string[] = [];

  if (params.keyword?.trim()) {
    parts.push(`keyword=${encodeURIComponent(params.keyword.trim())}`);
  }

  for (const [key, mongoField] of Object.entries(SEARCH_FIELD_MAP)) {
    const value = params[key as keyof CarSearchParams];
    if (value === undefined || value === null || value === "") continue;
    parts.push(`search[${mongoField}]=${encodeURIComponent(String(value))}`);
  }

  for (const { param, field, op } of RANGE_FIELD_MAP) {
    const value = params[param];
    if (value === undefined || value === null) continue;
    if (typeof value === "number" && !Number.isFinite(value)) continue;
    parts.push(`filter[${field}][${op}]=${encodeURIComponent(String(value))}`);
  }

  if (params.features?.length) {
    params.features.forEach((f) => {
      if (f.trim()) {
        parts.push(`filter[features][]=${encodeURIComponent(f.trim())}`);
      }
    });
  }

  return parts.join("&");
};


export const getCarByQuery = async (rawInput: string | CarSearchParams) => {
  try {
  
    const params =
      typeof rawInput === "string" ? parseQueryString(rawInput) : rawInput;

    const query = buildSearchQuery(params);
    const { data } = await axios(`${import.meta.env.VITE_BASE_URL}cars?${query}`);
    return data;
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
};


/* 
import axios from "axios";

export type CarSearchParams = {
  keyword?:      string;
  brandName?:    string;
  model?:        string;
  fuelType?:     string;
  transmission?: string;
  typeOfCar?:    string;
  color?:        string;
  year?:         number;
  available?:    boolean;
  features?:     string[];
  // range params are not search fields — handled separately below
  minYear?:      number;
  maxYear?:      number;
  minPrice?:     number;
  maxPrice?:     number;
  minMileage?:   number;
  maxMileage?:   number;
};

// Only plain string/boolean fields go here — ranges are handled separately
const SEARCH_FIELD_MAP: Partial<Record<keyof CarSearchParams, string>> = {
  brandName:    "brandName",
  model:        "model",
  fuelType:     "fuelType",
  transmission: "transmission",
  typeOfCar:    "typeOfCar",
  color:        "color",
  year:         "year",
  available:    "available",
};

// Range params map to their MongoDB field and operator
// Your backend middleware will need to handle filter[field][gte] etc.
const RANGE_FIELD_MAP: {
  param: keyof CarSearchParams;
  field: string;
  op: "gte" | "lte";
}[] = [
  { param: "minYear",    field: "year",          op: "gte" },
  { param: "maxYear",    field: "year",          op: "lte" },
  { param: "minPrice",   field: "requiredPrice", op: "gte" },
  { param: "maxPrice",   field: "requiredPrice", op: "lte" },
  { param: "minMileage", field: "mileAge",       op: "gte" },
  { param: "maxMileage", field: "mileAge",       op: "lte" },
];

const buildSearchQuery = (params: CarSearchParams): string => {
  const parts: string[] = [];

  // 1. Keyword — flat param, backend builds the $or
  if (params.keyword?.trim()) {
    parts.push(`keyword=${encodeURIComponent(params.keyword.trim())}`);
  }

  // 2. Exact / partial field searches
  for (const [key, mongoField] of Object.entries(SEARCH_FIELD_MAP)) {
    const value = params[key as keyof CarSearchParams];
    if (value === undefined || value === null || value === "") continue;
    parts.push(`search[${mongoField}]=${encodeURIComponent(String(value))}`);
  }

  // 3. Range filters — filter[year][gte]=2020&filter[year][lte]=2024
  for (const { param, field, op } of RANGE_FIELD_MAP) {
    const value = params[param];
    if (value === undefined || value === null) continue;
    if (typeof value === "number" && !Number.isFinite(value)) continue;
    parts.push(`filter[${field}][${op}]=${encodeURIComponent(String(value))}`);
  }

  // 4. Features array — filter[features][]=Air Conditioning
  if (params.features?.length) {
    params.features.forEach((f) => {
      if (f.trim()) {
        parts.push(`filter[features][]=${encodeURIComponent(f.trim())}`);
      }
    });
  }

  return parts.join("&");
};

export const getCarByQuery = async (params: CarSearchParams) => {
  try {
    const query = buildSearchQuery(params);
    const { data } = await axios(`${import.meta.env.VITE_BASE_URL}cars?${query}`);
    return data;
  } catch (error) {
    console.error("Search error:", error);
    throw error; // let the caller handle it instead of swallowing silently
  }
};
*/
