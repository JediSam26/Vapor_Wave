import Header from '@/components/landing-page/Header';
import HeroSection from '@/components/landing-page/HeroSection';
import ProductsSection from '@/components/landing-page/ProductsSection';
import BenefitsSection from '@/components/landing-page/BenefitsSection';
import TestimonialsSection from '@/components/landing-page/TestimonialsSection';
import GuaranteeSection from '@/components/landing-page/GuaranteeSection';
import FaqSection from '@/components/landing-page/FaqSection';
import FinalCtaSection from '@/components/landing-page/FinalCtaSection';
import Footer from '@/components/landing-page/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
