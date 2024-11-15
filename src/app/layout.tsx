import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";


const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    template: "%s - Bouletteproof",
    default: "Welcome - Bouletteproof",
  },
  description:
    "Helping business make informed decisions and succeed by giving them capabilities to map and analyze data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
