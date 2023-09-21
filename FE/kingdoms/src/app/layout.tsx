import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kingdoms",
  description: "The biggest game in a Game History!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"bg-black"}>{children}</body>
    </html>
  );
}
