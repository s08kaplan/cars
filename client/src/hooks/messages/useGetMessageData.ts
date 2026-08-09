import { useQuery } from "@tanstack/react-query";
import { messageApi } from "src/functions/messageApiCalls";

const useGetMessageData = (url: string) => {
  return useQuery({
    queryKey: ["messages", url],
    queryFn:() => messageApi.getMessageData(url),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  });
};

export default useGetMessageData;
