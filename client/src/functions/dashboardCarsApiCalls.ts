import { api } from "src/api/axiosInstance";
import { z } from "zod";

export interface DashboardCarItem {
  _id: string;
  filename: string;
  path: string;
  originalName: string;
  mimetype: string;
  size: number;
  type: string;
  createdAt?: string;
  updatedAt?: string;
}

export const dashboardCarSchema = z.object({
  type: z.literal("dashboard").optional(),
  imageFiles: z
    .custom<FileList>()
    .refine(
      (files) => files && files.length > 0,
      "At least one image is required",
    ),
});

export type DashboardCarFormData = z.infer<typeof dashboardCarSchema>;

export const uploadDashboardCarImages = async (
  files: FileList | File[] | undefined | null,
): Promise<DashboardCarItem[]> => {
  try {
    if (!files || (files instanceof FileList && files.length === 0)) {
      return [];
    }

    const formData = new FormData();

    formData.append("type", "dashboard");
    const fileArray = Array.from(files);

    fileArray.forEach((file) => formData.append("files", file));

    const { data } = await api.post<{ files: DashboardCarItem[] }>(
      "uploads/dashboard-cars",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );

    return data.files || [];
  } catch (error: any) {
    console.error("Dashboard car upload error: ", error);
    throw new Error(
      error?.response?.data?.message || error?.message || "Upload failed",
    );
  }
};

export const getDashboardCars = async (): Promise<DashboardCarItem[]> => {
  try {
    const { data } = await api.get<{ data: DashboardCarItem[] }>(
      "uploads/dashboard-cars",
    );
    console.log("data in dashboard:", data);

    return data.data || [];
  } catch (error: any) {
    //console.error("Dashboard cars fetch error: ", error);
    throw error;
  }
};

export const deleteDashboardCar = async (id: string): Promise<void> => {
  try {
    await api.delete(`uploads/dashboard-cars/${id}`);
  } catch (error: any) {
    //console.error(`Error deleting dashboard car ${id}: `, error);
    throw error;
  }
};
