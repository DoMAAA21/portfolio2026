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
    default: "Jharold Cataluña | Software Developer",
    template: "%s | Jharold Cataluña",
  },
  description:
    "Software developer building reliable web applications and growing into AI engineering. Portfolio featuring full-stack projects, RAG systems, and practical LLM integrations.",
  keywords: [
    "Jharold Cataluna",
    "Jharold Cataluña",
    "Software Developer",
    "AI Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "RAG",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: "Jharold Cataluna", url: "https://linkedin.com/in/jharold-cataluna" }],
  creator: "Jharold Cataluna",
  openGraph: {
    title: "Jharold Cataluna | Software Developer",
    description:
      "Software developer building reliable web applications and growing into AI engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jharold Cataluna | Software Developer",
    description:
      "Software developer building reliable web applications and growing into AI engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
