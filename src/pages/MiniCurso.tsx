import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Video, 
  FileText, 
  Users,
  Sparkles,
  Heart 
} from "lucide-react";
import speakingPhoto from "@/assets/speaking-photo.png";

const MiniCurso = () => {
  const modules = [
    {
      number: "01",
      title: "Autoconhecimento Profundo",
      description: "Descubra quem você realmente é além dos papéis que desempenha",
    },
    {
      number: "02",
      title: "Gestão Emocional",
      description: "Aprenda a identificar e gerenciar suas emoções de forma saudável",
    },
    {
      number: "03",
      title: "Crenças Limitantes",
      description: "Identifique e transforme padrões que te impedem de evoluir",
    },
    {
      number: "04",
      title: "Plano de Ação",
      description: "Crie um roteiro prático para sua jornada de transformação",
    },
  ];

  const benefits = [
    "4 aulas em vídeo exclusivas",
    "Material de apoio em PDF",
    "Exercícios práticos",
    "Certificado de conclusão",
    "Acesso por 1 ano",
    "Comunidade de alunas",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-warm-cream via-background to-warm-beige relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          
          <div className="container-section relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Mini Curso Gratuito</span>
                </div>

                <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
                  Desperte Sua{" "}
                  <span className="text-gradient">Essência Feminina</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Um mini curso transformador para mulheres que desejam se reconectar 
                  consigo mesmas e iniciar uma jornada de autoconhecimento profundo.
                </p>

                <div className="flex flex-wrap gap-6 mb-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span>2 horas de conteúdo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video size={18} className="text-primary" />
                    <span>4 vídeo-aulas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-primary" />
                    <span>Material em PDF</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" asChild>
                  <Link to="/checkout">
                    Garantir Minha Vaga Gratuita
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </div>

              <div className="relative animate-fade-up delay-200">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img
                    src={speakingPhoto}
                    alt="Mentora palestrando sobre bem-estar feminino"
                    className="w-full object-cover"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">+500</p>
                      <p className="text-xs text-muted-foreground">Alunas transformadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-24 bg-secondary/30">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Conteúdo do Curso
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4">
                O que você vai aprender
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="card-elegant flex gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display text-lg font-semibold text-primary">
                      {module.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & CTA */}
        <section className="py-24 bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Benefits */}
                <div className="animate-fade-up">
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Benefícios
                  </span>
                  <h2 className="font-display text-3xl font-semibold text-foreground mt-2 mb-8">
                    O que está incluso
                  </h2>

                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="animate-fade-up delay-200">
                  <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-center">
                    <Heart size={48} className="text-primary-foreground mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                      Gratuito por tempo limitado
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Garanta sua vaga agora e comece sua transformação hoje mesmo
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      asChild
                    >
                      <Link to="/checkout">
                        Quero Começar Agora
                        <ArrowRight size={20} />
                      </Link>
                    </Button>
                    <p className="text-xs text-primary-foreground/60 mt-4">
                      Vagas limitadas • Acesso imediato
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MiniCurso;
