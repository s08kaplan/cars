import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  messageApi,
  type UpdateMessageStatusParams,
} from "src/functions/messageApiCalls";

const useUpdateMessageStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, isRead }: UpdateMessageStatusParams) =>
      messageApi.updateMessageStatus({ id, isRead }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"], exact: false });
    },
    onError: (error) => {
      console.error("Failed to update status:", error);
    },
  });
};

export default useUpdateMessageStatus;
