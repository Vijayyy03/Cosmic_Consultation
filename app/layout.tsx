import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-serif", // Headings
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-sans", // Body
    display: "swap",
});

export const metadata: Metadata = {
    title: "Shiv Cosmic Energy Solutions | Astrology & Vastu Consultation",
    description: "Unlock your true potential with personalized astrology and Vastu solutions. Expert cosmic chart analysis and energy alignment services.",
    keywords: ["astrology", "vastu", "janam kundli", "numerology", "cosmic energy", "consultation"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>

            <body className="font-sans antialiased">
                <SmoothScroll>
                    <ScrollProgress />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
