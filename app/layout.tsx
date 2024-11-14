import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/main/navbar";
import Header from "@/components/main/header";
import {Poppins} from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: "300" })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "DR Forever Us",
  description: "All Our Albums",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased`} >
        <Header/>
        
        {children}

        <Navbar />
      </body>
    </html>
  );
}
