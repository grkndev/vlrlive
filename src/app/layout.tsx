import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "VALORANT LIVE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased dark `}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
