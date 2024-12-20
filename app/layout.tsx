import Footer from "../components/Footer";
import NavBar from "@/components/NavBar";
import { CurrencyProvider } from "@/context/currencyContext";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "@/node_modules/next/image";
import whatsapp from "@/logos/whatsapp.png";
import Link from "@/node_modules/next/link";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ravan Real Estate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CurrencyProvider>
        <body className={`${montserrat.variable} antialiased`}>
          <NavBar />
          {children}
          <Footer />
          <div className="fixed bottom-5 left-5 w-[30vw] md:w-[10vw]">
            <Link
              href="http://wa.me/971542002168"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={whatsapp} alt="WhatsApp button image" />
            </Link>
          </div>
        </body>
      </CurrencyProvider>
    </html>
  );
}
