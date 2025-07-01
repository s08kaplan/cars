'use client';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
 
   const [queryClient] = useState(() => new QueryClient({
    queryCache: new QueryCache({
      onError: (error: any) => {
        if (error?.status === 401) {
          queryClient.removeQueries({ queryKey: ['auth'] });
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error: any) => {
        if (error?.status === 401) {
          queryClient.removeQueries({ queryKey: ['auth'] });
        }
      },
    }),
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: true,
        retry: (failureCount, error: any) => {
          if (error?.message === 'UNAUTHENTICATED' || error?.status === 401 || error?.status === 403) {
            return false;
          }
          return failureCount < 3;
        },
      },
      mutations: {
        retry: (failureCount, error: any) => {
          if (error?.status === 401 || error?.status === 403) {
            return false;
          }
          return failureCount < 2;
        },
      },
    },
  }));

  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </TanStackQueryClientProvider>
  );
}

export default QueryClientProvider