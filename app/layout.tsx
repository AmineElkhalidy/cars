import { Footer, Navbar, Switcher } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Cars - cars exhibition",
  description: "Discover the best car in the entire world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark scroll-smooth" lang="en">
      <body className="dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative">
            <Navbar />
            <Switcher />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
