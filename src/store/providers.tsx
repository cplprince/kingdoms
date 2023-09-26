"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import { store } from "./store";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
}
