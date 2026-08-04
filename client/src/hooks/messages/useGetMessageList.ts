import { useQuery } from "@tanstack/react-query";
import React from "react";
import { messageApi } from "src/functions/messageApiCalls";

const useGetMessageList = () => {
  return useQuery({
    queryKey: ["message-list"],
    queryFn: messageApi.getMessageList,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  });
};

export default useGetMessageList;
