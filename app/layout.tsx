import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StructuredData, dashiellBusinessData, generateLocalBusinessSchema } from "@/utils/seo";

// Define CSS variables for fonts without using next/font
// This avoids certificate issues during build
const geistSans = {
  variable: "font-sans"
};

const geistMono = {
  variable: "font-mono"
};

export const metadata: Metadata = {
  title: {
    template: '%s | Dashiell LLC',
    default: 'Dashiell LLC | Home Improvement Services in Chelsea, Alabama',
  },
  description: "Professional home improvement services in Chelsea, Alabama. Specializing in renovations, remodeling, and repairs for residential and commercial properties.",
  keywords: "home improvement, renovation, remodeling, Chelsea, Alabama, construction, home repair",
  metadataBase: new URL('https://dashiellllc.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dashiellllc.com',
    siteName: 'Dashiell LLC',
    title: 'Dashiell LLC | Home Improvement Services in Chelsea, Alabama',
    description: 'Professional home improvement services in Chelsea, Alabama. Specializing in renovations, remodeling, and repairs for residential and commercial properties.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashiell LLC | Home Improvement Services in Chelsea, Alabama',
    description: 'Professional home improvement services in Chelsea, Alabama. Specializing in renovations, remodeling, and repairs for residential and commercial properties.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1e40af', // Blue-800 from Tailwind
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Add global structured data */}
        <StructuredData data={generateLocalBusinessSchema(dashiellBusinessData)} />
      </body>
    </html>
  );
}
