import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Saurabh Shanbhag — Portfolio",
  description:
    "MBA Student, UI/UX Designer & Web Developer based in Bengaluru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} min-h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="relative z-0 w-full min-w-0 flex-1 pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
