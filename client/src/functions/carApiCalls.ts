import axios from "axios";
import { z } from "zod";
export interface CarQueryParams {
  page?: number;
  limit?: number;
  keyword?: string;
  sort?: Record<string, 1 | -1>;
  filter?: Record<string, any>;
  search?: Record<string, string>;
}

export interface Fine {
  date: Date;
  reason: string;
  amount: number;
}

export interface TollPass {
  date: Date;
  location: string;
  cost: number;
}

export interface NewCar {
  brandName: string;
  model: string;
  typeOfCar: "SUV" | "Sedan" | "Hatchback";
  year: number;
  image: string;
  carStatus: "Sold" | "Waiting" | "Dealing" | "Repair" | "Cleaning";
  vehicleIdentificationNumber: string;
  color: string;
  mileAge: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  boughtPrice: number;
  requiredPrice: number;
  soldPrice?: number;
  available: boolean;
  features: string[];

  trafficInfo: {
    accidentCount: number;
    lastAccidentDate?: Date;
    fines?: Fine[];
  };

  insuranceStatus: {
    provider: string;
    policyNumber: string;
    validFrom: Date;
    validUntil: Date;
    isActive: boolean;
  };

  legalStatus: {
    hasCriminalRecord: boolean;
    hasDebt: boolean;
    notes: string;
  };

  inspectionStatus: {
    lastInspectionDate: Date;
    passed: boolean;
    nextDueDate: Date;
    exhaustEmissionLevel: "Low" | "Moderate" | "High";
  };

  tollInfo: {
    hgsActive: boolean;
    ogsActive: boolean;
    balance: number;
    recentPasses: TollPass[];
  };
}

const baseUrl = import.meta.env.VITE_BASE_URL;

export const carSchema = z.object({
  brandName: z.string().min(1, "Brand name is required"),
  model: z.string().min(1, "Model is required"),
  typeOfCar: z.enum(["SUV", "Sedan", "Hatchback"]),
  year: z.number().min(1900),
  carStatus: z.enum(["Sold", "Waiting", "Dealing", "Repair", "Cleaning"]),
  vehicleIdentificationNumber: z.string().min(1),
  color: z.string().min(1),
  mileAge: z.number().nonnegative(),
  fuelType: z.enum(["Petrol", "Diesel", "Electric", "Hybrid"]),
  transmission: z.enum(["Automatic", "Manual"]),
  boughtPrice: z.number().positive(),
  requiredPrice: z.number().positive(),
  soldPrice: z.number().optional(),
  available: z.boolean(),
  features: z.array(z.string()),
  imageFiles: z
    .custom<FileList>()
    .refine(
      (files) => files && files.length > 0,
      "At least one image is required",
    ),
});

export type CarFormData = z.infer<typeof carSchema>;

export const uploadCarImages = async (
  files: FileList | File[],
): Promise<string> => {
  const formData = new FormData();
  Array.from(files).forEach((file) => formData.append("files", file));

  const { data } = await axios.post<{ url: string }>(
    `${baseUrl}uploads`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return data.url;
};

export const getCarStatus = async (
  url?: string,
  page: number = 1,
  limit: number = 10,
) => {
  if (!url) return;

  try {
    const { data } = await axios(
      `${import.meta.env.VITE_BASE_URL}cars?filter[available]=${url}&page=${page}&limit=${limit}`,
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

export const addNewCar = async (carData: NewCar) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  try {
    const { data } = await axios.post(`${baseUrl}cars`, carData);
    return data;
  } catch (error) {
    console.error("Cars data not provided", error);
    throw error;
  }
};
