import axios from "axios";

type CarSearchParams = {
  keyword?: string;
  brandName?: string;
  model?: string;
  fuelType?: string;
  transmission?: string;
  typeOfCar?: string;
  color?: string;
  year?: number;
  minYear?: number;
  maxYear?: number;
  minPrice?: number;
  maxPrice?: number;
  minMileage?: number;
  maxMileage?: number;
  available?: boolean;
  features?: string[];
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
}

const buildSearchQuery = (params: CarSearchParams): string => {
  const parts: string[] = []

 
  if (params.keyword?.trim()) {
    parts.push(`keyword=${encodeURIComponent(params.keyword.trim())}`)
  }


  for (const [key, mongoField] of Object.entries(SEARCH_FIELD_MAP)) {
    const value = params[key as keyof CarSearchParams]
    if (value === undefined || value === null || value === "") continue
    parts.push(`search[${mongoField}]=${encodeURIComponent(String(value))}`)
  }

  return parts.join("&")
}

export const getCarByQuery = async (params: CarSearchParams) => {
  try {
    const query = buildSearchQuery(params);

    const { data } = await axios(
      `${import.meta.env.VITE_BASE_URL}cars?${query}`,
    );
    return data;
  } catch (error) {
    console.error("searching error", error);
  }
};

/* 
import axios from "axios"

type CarSearchParams = {
  brandName?: string
  model?: string
  fuelType?: string
  transmission?: string
  typeOfCar?: string
  color?: string
  year?: number
  minYear?: number
  maxYear?: number
  minPrice?: number
  maxPrice?: number
  minMileage?: number
  maxMileage?: number
  available?: boolean
  features?: string[]   // e.g. ['Air Conditioning']
}

export const searchCars = async (params: CarSearchParams) => {
  try {
    // Build query string: only include params that are actually provided
    const query = buildSearchQuery(params)

    const { data } = await axios(`${import.meta.env.VITE_BASE_URL}cars?${query}`)
    return data
  } catch (error) {
    console.error("Search error:", error)
    throw error
  }
}

const buildSearchQuery = (params: CarSearchParams): string => {
  const queryParts: string[] = []

  const fieldMap: Partial<Record<keyof CarSearchParams, string>> = {
    brandName:    "search[brandName]",
    model:        "search[model]",
    fuelType:     "search[fuelType]",
    transmission: "search[transmission]",
    typeOfCar:    "search[typeOfCar]",
    color:        "search[color]",
    year:         "search[year]",
    minYear:      "search[year][gte]",
    maxYear:      "search[year][lte]",
    minPrice:     "search[requiredPrice][gte]",
    maxPrice:     "search[requiredPrice][lte]",
    minMileage:   "search[mileAge][gte]",
    maxMileage:   "search[mileAge][lte]",
    available:    "search[available]",
  }

  for (const [key, queryKey] of Object.entries(fieldMap)) {
    const value = params[key as keyof CarSearchParams]
    if (value !== undefined && value !== "" && value !== null) {
      queryParts.push(`${queryKey}=${encodeURIComponent(String(value))}`)
    }
  }

  // features is an array — send each item separately
  if (params.features?.length) {
    params.features.forEach(f => {
      queryParts.push(`search[features][]=${encodeURIComponent(f)}`)
    })
  }

  return queryParts.join("&")
}

*/
