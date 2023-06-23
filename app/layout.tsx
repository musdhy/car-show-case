
import { Footer, Navbar } from "@/components";
import "./globals.css";
import React from "react";
import ProgressBar from "@/components/ProgressBar";
import Scrollbar from "@/components/scrollBar";

export const metadata = {
  title: "Car Hub",
  description: "Find, book, rent a car ,quickly and super easy!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`relative`} suppressHydrationWarning={true}>
        <Scrollbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
