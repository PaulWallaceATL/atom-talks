import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.scss";
import "./center-fix.css";
import ClientScripts from "@/components/ClientScripts";

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "AtomTalks - AI Agent Platform | Deploy RAG Agents in 24 Hours",
    template: "%s | AtomTalks",
  },
  description: "Turn your website and docs into an intelligent AI agent with emotional intelligence. Deploy in 24 hours, no engineering required.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  icons: {
    icon: '/images/favicon.svg',
    apple: '/images/favicon.svg',
  },
  openGraph: {
    title: 'AtomTalks - AI Agent Platform | Deploy RAG Agents in 24 Hours',
    description: 'Turn your website and docs into an intelligent AI agent with emotional intelligence. Deploy in 24 hours, no engineering required.',
    url: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
    siteName: 'AtomTalks',
    images: [
      {
        url: '/images/screens/screen-1.jpg',
        width: 1200,
        height: 630,
        alt: 'AtomTalks AI Agent Dashboard - Emotional Intelligence and RAG Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AtomTalks - AI Agent Platform | Deploy RAG Agents in 24 Hours',
    description: 'Turn your website and docs into an intelligent AI agent with emotional intelligence. Deploy in 24 hours, no engineering required.',
    images: ['/images/screens/screen-1.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={spaceGrotesk.variable}>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
