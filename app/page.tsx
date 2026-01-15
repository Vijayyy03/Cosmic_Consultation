import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/sections/HeroSlider";
import AboutCosmic from "@/components/sections/AboutCosmic";
import ProductGrid from "@/components/sections/ProductGrid";
import ServicesGrid from "@/components/sections/ServicesGrid";
import DirectionalVastu from "@/components/sections/DirectionalVastu";
import Testimonials from "@/components/sections/Testimonials";
import VideoSection from "@/components/sections/VideoSection";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <main className="relative">
            {/* Navigation */}
            <Navigation />

            {/* WhatsApp Button */}
            <WhatsAppButton />

            {/* All Sections */}
            <HeroSlider />
            <AboutCosmic />
            <VideoSection />
            <WhoWeHelp />
            <ProductGrid />
            <ServicesGrid />
            <DirectionalVastu />
            <Testimonials />
            <FinalCTA />

            {/* Footer */}
            <Footer />
        </main>
    );
}
