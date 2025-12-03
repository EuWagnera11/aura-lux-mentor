import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-background to-warm-beige" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6 animate-fade-up">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">Mentoria para Mulheres</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Desperte seu{" "}
              <span className="text-gradient">potencial</span>
              <br />e transforme sua vida
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up delay-200">
              Através do autoconhecimento e acolhimento, ajudo mulheres a encontrarem 
              equilíbrio emocional e conquistarem uma vida plena e significativa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/mini-curso">
                  Começar Minha Transformação
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#sobre">Conhecer Mais</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-up delay-400">
              {[
                { number: "500+", label: "Mulheres Transformadas" },
                { number: "10+", label: "Anos de Experiência" },
                { number: "98%", label: "Satisfação" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="font-display text-2xl lg:text-3xl font-semibold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-xs lg:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={heroPhoto}
                  alt="Mentora - Psicanalista e Fonoaudióloga especializada em bem-estar feminino"
                  className="w-full max-w-md lg:max-w-lg object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
