import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TravelFooter from "@/components/travel-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Payalo Web",
  description: "Payalo Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <TravelFooter />
      </body>
    </html>
  );
}
