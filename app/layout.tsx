import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTCars - Cars exhibition",
  description: "Discover the best car in the entire world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body className="dark:bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
