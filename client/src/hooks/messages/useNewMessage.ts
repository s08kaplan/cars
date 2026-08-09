import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ContactFormData } from "src/components/Form/ContactForm";
import { messageApi } from "src/functions/messageApiCalls";

const useNewMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: ContactFormData) => messageApi.newMessage(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error: unknown) => {
      console.error("Message failed:", error);
    },
  });
};

export default useNewMessage;
