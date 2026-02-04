import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-tech",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Path 19 // Voice Program OS",
  description: "The operating system for scalable voice programs."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
