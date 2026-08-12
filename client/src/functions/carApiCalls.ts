import axios from "axios";

export interface CarQueryParams {
  page?: number;
  limit?: number;
  keyword?: string;
  sort?: Record<string, 1 | -1>;
  filter?: Record<string, any>;
  search?: Record<string, string>;
}

export const getCarStatus = async (
  url?: string,
  page: number = 1,
  limit: number = 10
) => {
  if (!url) return;

  try {
    const { data } = await axios(
      `${import.meta.env.VITE_BASE_URL}cars?filter[available]=${url}&page=${page}&limit=${limit}`
    );
    return data;
  } catch (error) {
    console.error("Car statistics not found", error);
    throw error;
  }
};

export const getCars = async (carId?: string, params?: CarQueryParams) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  if (carId) {
    try {
      const { data } = await axios.get(`${baseUrl}cars/${carId}`);
      return data;
    } catch (error) {
      console.error(`Car ${carId} data not fetched`, error);
      throw error;
    }
  }

  try {
    const { data } = await axios.get(`${baseUrl}cars/`, { params });
    return data;
  } catch (error) {
    console.error("Cars data not fetched", error);
    throw error;
  }
};