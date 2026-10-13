import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Amber Qian | Full Stack Developer",
    template: "%s | Amber Qian",
  },
  description:
    "Portfolio of Amber Qian, a Full Stack Software Developer with 10+ years of experience in C#, .NET, Python, SQL, web applications, APIs, and data solutions.",
  keywords: [
    "Amber Qian",
    "Full Stack Developer",
    "Software Developer",
    "C#",
    ".NET",
    "Python",
    "SQL",
    "Data Developer",
    "Business Intelligence",
  ],
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
