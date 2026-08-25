import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deltacore Labs | Projects",
  description:
    "Explore innovative iOS apps and Safari extensions by Deltacore Labs. Open source projects for the Apple ecosystem.",
  keywords: ["iOS", "Swift", "Safari Extension", "Open Source", "Apple", "Apps"],
  authors: [{ name: "Deltacore Labs" }],
  openGraph: {
    title: "Deltacore Labs | Projects",
    description: "Explore innovative iOS apps and Safari extensions by Deltacore Labs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
