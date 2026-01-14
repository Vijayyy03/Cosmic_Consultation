import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/sections/HeroSlider";
import AboutVastukalp from "@/components/sections/AboutVastukalp";
import ProductGrid from "@/components/sections/ProductGrid";
import ServicesGrid from "@/components/sections/ServicesGrid";
import DirectionalVastu from "@/components/sections/DirectionalVastu";
import Testimonials from "@/components/sections/Testimonials";
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
            <AboutVastukalp />
            <ProductGrid />
            <ServicesGrid />
            <DirectionalVastu />
            <Testimonials />

            {/* Footer */}
            <Footer />
        </main>
    );
}
