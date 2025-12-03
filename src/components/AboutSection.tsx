import { Heart, Brain, Sparkles, Users } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const expertise = [
    {
      icon: Brain,
      title: "Psicanálise",
      description: "Aprofundamento no autoconhecimento e compreensão das emoções",
    },
    {
      icon: Heart,
      title: "Bem-estar",
      description: "Foco na saúde mental e equilíbrio emocional",
    },
    {
      icon: Users,
      title: "Mentoria",
      description: "Acompanhamento personalizado para sua jornada",
    },
    {
      icon: Sparkles,
      title: "Transformação",
      description: "Ferramentas práticas para mudanças reais",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={profilePhoto}
                alt="Retrato profissional da mentora"
                className="w-full max-w-md mx-auto object-cover rounded-2xl"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 lg:right-6 bg-card p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs">
              <p className="font-display text-lg font-semibold text-foreground mb-2">
                "Cada mulher carrega em si a força para sua transformação"
              </p>
              <p className="text-sm text-muted-foreground">— Nome da Mentora</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up delay-200">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Quem Sou Eu
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-6">
              Uma jornada dedicada ao{" "}
              <span className="text-gradient">bem-estar feminino</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Sou psicanalista e fonoaudióloga, com mais de uma década de experiência 
                acompanhando mulheres em suas jornadas de autoconhecimento e transformação pessoal.
              </p>
              <p>
                Minha missão é criar um espaço seguro e acolhedor onde você possa se reconectar 
                consigo mesma, entender suas emoções e desenvolver ferramentas para viver com 
                mais leveza, propósito e plenitude.
              </p>
              <p>
                Através das minhas mentorias, combinamos conhecimentos da psicanálise com 
                práticas de bem-estar para uma transformação profunda e duradoura.
              </p>
            </div>

            {/* Expertise grid */}
            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <item.icon size={24} className="text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
