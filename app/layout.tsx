import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Living Soil Farms | Premium Organic Ingredients",
  description: "Consistent, traceable moringa ingredients from Andhra Pradesh, India.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
