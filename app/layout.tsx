import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-cinzel",
    display: "swap",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-lato",
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
        <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
            <body className="font-sans antialiased">
                <SmoothScroll>
                    <ScrollProgress />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
