import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  uploadDashboardCarImages,
  type DashboardCarFormData,
  type DashboardCarItem,
} from "src/functions/dashboardCarsApiCalls";

export const useAddDashboardCar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: DashboardCarFormData): Promise<DashboardCarItem[]> => {
      return await uploadDashboardCarImages(formData.imageFiles);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard-cars"] });
    },
  });
};