import type { Metadata } from "next";
import { Permanent_Marker, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";

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
  title: "The One Where Loves Ana - Valentine's Day",
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
