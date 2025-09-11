import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PS70 - Digital Fabrication",
  description: "Documentation website for PS70: Introduction to Digital Fabrication coursework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="floating-element w-64 h-64 top-10 -left-32 opacity-30"></div>
          <div className="floating-element w-48 h-48 top-1/3 right-10 opacity-20" style={{animationDelay: '2s'}}></div>
          <div className="floating-element w-32 h-32 bottom-20 left-1/4 opacity-25" style={{animationDelay: '4s'}}></div>
          <div className="floating-element w-96 h-96 -bottom-48 -right-48 opacity-15" style={{animationDelay: '1s'}}></div>
        </div>
        
        <Navigation />
        <main className="min-h-screen pt-28 pb-4 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
