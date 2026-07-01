import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Amish Auto India — Coming Soon",
  description: "Amish Auto India (OPC) Pvt Ltd — Driving the Future. Our new website is coming soon.",
  openGraph: {
    title: "Amish Auto India",
    description: "Driving the Future. Coming soon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="h-full">{children}</body>
    </html>
  );
}
