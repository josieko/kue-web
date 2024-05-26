import type { Metadata } from "next";
import { Inter, Oswald, Montserrat } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "KUE JAMIE",
  description: "DJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
