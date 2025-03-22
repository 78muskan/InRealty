import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot-widget"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InRealty - Find Your Dream Home",
  description: "A modern real estate marketplace to find your perfect property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <ChatbotWidget/>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";

