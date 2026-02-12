import type { Metadata } from "next";
import { Merriweather, Permanent_Marker } from "next/font/google";
import { ThemeProvider } from "./components/ThemeContext";
import "./globals.css";

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent-marker",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["700"],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The One Where Mi Loves Ana - Valentine's Day",
  description: "A romantic crossover between Friends and Stranger Things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${permanentMarker.variable} ${merriweather.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
