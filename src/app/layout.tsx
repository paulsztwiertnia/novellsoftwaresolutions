import type { Metadata } from "next";
import { Michroma, Montserrat, Poppins } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { upload } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home - Novell Software Solutions",
    template: "%s - Novell Software Solutions",
  },
  description:
    "We are a digital agency that offers design, marketing strategy, and software solutions to businesses and individuals.",
  icons: {
    icon: upload("2023/11/cropped-favicon-1-32x32.png"),
    apple: upload("2023/11/cropped-favicon-1-180x180.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${michroma.variable} ${poppins.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
