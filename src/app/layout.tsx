import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({weight: ["400", "500", "700"], subsets: ["cyrillic", "latin", "vietnamese"]})
export const metadata: Metadata = {
  title: "Darkmode Login Form",
  description: "Designed by Mustopha Abdulqadir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-darkBg`}
      >
        {children}
      </body>
    </html>
  );
}
