"use client";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getCarByQuery } from "src/helpers/search";

export const useCarSearch = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["cars", "search", query],
    queryFn: () => getCarByQuery(query),
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  });

  const cars = data?.data || data || [];

  return {
    query,
    cars,
    isLoading,
    isFetching,
    isError,
    isEmpty: !isLoading && !isError && cars.length === 0 && query.trim().length > 0,
  };
};