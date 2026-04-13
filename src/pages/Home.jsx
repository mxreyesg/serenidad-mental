import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

import FAQSection from "../components/home/FAQSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />
      <div id="inicio">
        <HeroSection />
      </div>
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}