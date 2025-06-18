import React from "react";
import { Outlet } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            staleTime: 5 * 60 * 1000, 
            refetchOnWindowFocus: false,
        },
    },
})

const PublicLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h3>PublicLayout</h3>
      <Outlet />
    </QueryClientProvider>
  );
};

export default PublicLayout;
