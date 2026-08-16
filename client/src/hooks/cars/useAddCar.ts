import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewCar, uploadCarImages, type NewCar, type CarFormData } from "src/functions/carApiCalls";

export const useAddCar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: CarFormData) => {
     
      const imageUrl = await uploadCarImages(formData.imageFiles);

      const { imageFiles, ...carFields } = formData;

      const finalCarPayload: NewCar = {
        ...carFields,
        image: imageUrl,
        available: carFields.available ?? true,
        features: carFields.features ?? [],
        trafficInfo: {
          accidentCount: 0,
          fines: [],
        },
        insuranceStatus: {
          provider: "N/A",
          policyNumber: "N/A",
          validFrom: new Date(),
          validUntil: new Date(),
          isActive: false,
        },
        legalStatus: {
          hasCriminalRecord: false,
          hasDebt: false,
          notes: "",
        },
        inspectionStatus: {
          lastInspectionDate: new Date(),
          passed: true,
          nextDueDate: new Date(),
          exhaustEmissionLevel: "Low",
        },
        tollInfo: {
          hgsActive: false,
          ogsActive: false,
          balance: 0,
          recentPasses: [],
        },
      };

      return await addNewCar(finalCarPayload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });
};