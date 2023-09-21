"use client";

import { Providers } from "@/store/provider";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Providers>
        <html lang="en">
          <body className={"bg-black"}>{children}</body>
        </html>
      </Providers>
    </QueryClientProvider>
  );
}
