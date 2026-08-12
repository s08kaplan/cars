import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCarByQuery } from "src/helpers/search";

export const useCars = (initialPage = 1, limit = 10) => {
  const [page, setPage] = useState(initialPage);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cars", "dashboard", page],
    queryFn: () => getCarByQuery({ page, limit }),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  console.log("data in useCars:" ,data)

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    cars: data?.data || [],
    details: data?.details,
    isLoading,
    isError,
    error,
    currentPage: page,
    handlePageChange,
  };
};