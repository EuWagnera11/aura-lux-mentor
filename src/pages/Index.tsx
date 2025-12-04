import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Sara Duarte | Mentoria para Mulheres - Transformação e Identidade"
        description="Sara Duarte - Mentora especializada em transformação feminina. Descubra sua verdadeira identidade, ative sua segurança e entre no seu destino."
        keywords="Sara Duarte, mentoria feminina, identidade feminina, transformação pessoal, autoconhecimento, bem-estar feminino"
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
