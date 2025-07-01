'use client';

import { QueryClient, QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
   const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: true, // Refetch when user returns to tab
            retry: (failureCount, error: any) => {
              // Don't retry on authentication errors
              if (error?.message === 'UNAUTHENTICATED' || 
                  error?.status === 401 || 
                  error?.status === 403) {
                return false;
              }
              return failureCount < 3;
            },
          },
          mutations: {
            retry: (failureCount, error: any) => {
              // Don't retry auth-related mutations
              if (error?.status === 401 || error?.status === 403) {
                return false;
              }
              return failureCount < 2;
            },
          },
        },
        mutationCache: {
          onError: (error: any) => {
           
            if (error?.status === 401) {
            
              queryClient.removeQueries({ queryKey: ['auth'] });
            }
          },
        },
        queryCache: {
          onError: (error: any) => {
            
            if (error?.message === 'UNAUTHENTICATED') {
           
              return;
            }
            if (error?.status === 401) {
            
              queryClient.removeQueries({ queryKey: ['auth'] });
            }
          },
        },
      })
  );
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </TanStackQueryClientProvider>
  );
}

export default QueryClientProvider