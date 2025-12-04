import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar,
  Gift,
  Flame,
  Target,
  Gem,
  Sparkles,
  Heart,
  MessageCircle
} from "lucide-react";
import speakingPhoto from "@/assets/speaking-photo.png";

const WHATSAPP_LINK = "https://wa.me/5511981621509?text=Olá! Quero participar do Mini Evento: A Verdade de Quem Você É Vai Te Libertar";

const MiniCurso = () => {
  const modules = [
    {
      icon: Target,
      title: "Despertamento",
      subtitle: "Acorde para a verdade sobre você",
      description: "Você vai enxergar a raiz da insegurança, da comparação e da auto-sabotagem. Vai entender por que sempre sente que \"falta algo\" — e vai finalmente romper isso.",
    },
    {
      icon: Flame,
      title: "Posicionamento",
      subtitle: "Como se tornar inabalável por dentro",
      description: "A segurança não vem de frases motivacionais. Ela vem de identidade restaurada. Vou te mostrar como ativar uma segurança que não desmorona quando você é criticada, rejeitada ou pressionada.",
    },
    {
      icon: Gem,
      title: "Autoridade",
      subtitle: "O dia em que você escolhe quem vai ser daqui pra frente",
      description: "Você vai aprender a parar de viver pelo que os outros dizem e assumir a sua voz no mundo.",
    },
  ];

  const forWho = [
    "Estão cansadas de duvidar de si mesmas",
    "Fogem de se expor por não sentirem segurança",
    "Estão sem voz, sem autoridade e autenticidade",
    "Sabem que nasceram para mais, mas não conseguem romper",
    "Estão travadas, presas, inseguras ou apagadas",
    "Querem entrar em um novo nível de presença, verdade e poder",
    "Sentem que algo as impede de prosperar de verdade",
    "Querem entender seu chamado, destino e propósito",
  ];

  const benefits = [
    "Clareza sobre quem você realmente é",
    "Identidade restaurada no nível mais profundo",
    "Segurança interna para se posicionar",
    "Acesso ao método que destrava instantaneamente",
    "Direção clara sobre o que precisa fazer daqui para frente",
    "Declarações de identidade para ativar todos os dias",
    "Bônus especial: PDF \"Ativação da Identidade\"",
  ];

  const transformations = [
    "Você para de viver para agradar",
    "Você para de ter medo da opinião dos outros",
    "Você acessa força que já estava em você",
    "Você entra em alinhamento espiritual e emocional",
    "Você se posiciona com autoridade",
    "Você se torna uma mulher que ninguém consegue apagar",
  ];

  return (
    <>
      <SEO
        title="Mini Evento Gratuito - A Verdade de Quem Você É Vai Te Libertar"
        description="Participe do mini evento gratuito com Sara Duarte. Desperte sua verdadeira identidade, ative sua segurança e entre no seu destino. Online, 60-90 minutos."
        keywords="mini evento gratuito, identidade feminina, Sara Duarte, transformação, autoconhecimento, segurança emocional"
        url="https://saraduarte.com.br/mini-curso"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
        {/* Hero */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-warm-cream via-background to-warm-beige relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          
          <div className="container-section px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary rounded-full mb-4 sm:mb-6">
                  <Sparkles size={14} className="text-primary sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">Mini Evento Gratuito</span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4 sm:mb-6">
                  A Verdade de Quem Você É{" "}
                  <span className="text-gradient">Vai Te Libertar</span>
                </h1>

                <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mb-4">
                  Desperte sua verdadeira identidade. Ative sua segurança. Entre no seu destino.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                    <span>60–90 min</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                    <span>Online • 20h</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Gift size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                    <span>Gratuito</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <MessageCircle size={18} className="flex-shrink-0" />
                    <span>Quero Participar do Mini Evento</span>
                    <ArrowRight size={18} className="flex-shrink-0" />
                  </a>
                </Button>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200} className="order-first lg:order-last">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 max-w-md mx-auto lg:max-w-none">
                  <img
                    src={speakingPhoto}
                    alt="Sara Duarte palestrando sobre identidade e transformação feminina"
                    className="w-full object-cover"
                    loading="eager"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 sm:py-24 bg-foreground text-background">
          <div className="container-section px-4 sm:px-6">
            <ScrollReveal className="max-w-3xl mx-auto text-center">
              <Flame size={36} className="text-primary mx-auto mb-4 sm:mb-6 sm:w-12 sm:h-12" />
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
                A maior prisão não é o medo.
                <br />
                <span className="text-primary">É não saber quem você realmente é.</span>
              </h2>
              <p className="text-base sm:text-lg text-background/80 leading-relaxed mb-4 sm:mb-6">
                A maioria das mulheres não fracassa por falta de força, inteligência ou fé.
                Elas fracassam porque não sabem quem são.
              </p>
              <p className="text-sm sm:text-base text-background/70 leading-relaxed">
                Vivem apagando incêndios emocionais, tentando ser aceitas, tentando agradar, tentando "merecer" algo…
                Mas nenhuma vida se sustenta quando a identidade está ferida.
                E é exatamente isso que eu vou destravar em você.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* The Promise */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="container-section px-4 sm:px-6">
            <ScrollReveal className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4 sm:mb-6">
                Quando você entende quem é, você se posiciona.
              </h2>
              <p className="text-lg sm:text-xl text-primary font-medium">
                Quando você se posiciona, você conquista.
                <br />
                E quando conquista, você sustenta.
              </p>
              <div className="section-divider mt-6 sm:mt-8" />
            </ScrollReveal>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container-section px-4 sm:px-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
                ✨ O que vai acontecer
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4">
                Nesse Mini Evento
              </h2>
              <div className="section-divider" />
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
              {modules.map((module, index) => (
                <ScrollReveal
                  key={index}
                  animation="scale-in"
                  delay={index * 100}
                >
                  <div className="card-elegant text-center h-full p-5 sm:p-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <module.icon size={24} className="text-primary sm:w-8 sm:h-8" />
                    </div>
                    <span className="text-xs sm:text-sm text-primary font-medium">{index + 1}.</span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1">{module.title}</h3>
                    <p className="text-xs sm:text-sm text-primary mb-3 sm:mb-4">{module.subtitle}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <p className="text-center text-sm sm:text-base text-muted-foreground mt-8 sm:mt-12 max-w-2xl mx-auto">
                Esse encontro vai ativar dentro de você um nível de clareza que muda comportamento, decisões e destino.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* For Who */}
        <section className="py-16 sm:py-24 bg-warm-cream">
          <div className="container-section px-4 sm:px-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
                🎙 Para quem é
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4">
                Esse Mini Evento?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">Para mulheres que:</p>
              <div className="section-divider" />
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {forWho.map((item, index) => (
                <ScrollReveal key={index} animation="slide-left" delay={index * 50}>
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card rounded-xl">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <p className="text-center text-base sm:text-lg text-muted-foreground mt-8 sm:mt-12 italic">
                Se você sente que está vivendo muito abaixo do seu potencial…
                <br />
                <span className="text-primary font-semibold">este é o seu chamado.</span>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container-section px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <ScrollReveal animation="slide-left">
                  <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
                    🚀 O que você vai ganhar
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mt-2 mb-6 sm:mb-8">
                    Participando
                  </h2>

                  <ul className="space-y-3 sm:space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-foreground">
                    E principalmente:
                    <br />
                    <span className="text-primary text-sm sm:text-base">🔥 A capacidade de sustentar tudo o que você conquistar daqui pra frente.</span>
                  </p>
                </ScrollReveal>

                {/* CTA Card */}
                <ScrollReveal animation="slide-right" delay={200}>
                  <div className="bg-gradient-to-br from-primary to-accent p-6 sm:p-8 rounded-2xl text-center">
                    <Heart size={36} className="text-primary-foreground mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary-foreground mb-2">
                      Inscrição Gratuita
                    </h3>
                    <p className="text-sm sm:text-base text-primary-foreground/80 mb-4 sm:mb-6">
                      Garanta sua vaga agora e desperte sua verdadeira identidade
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-sm sm:text-base"
                      asChild
                    >
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <MessageCircle size={18} className="flex-shrink-0" />
                        <span>Quero Participar</span>
                        <ArrowRight size={18} className="flex-shrink-0" />
                      </a>
                    </Button>
                    <p className="text-xs text-primary-foreground/60 mt-3 sm:mt-4">
                      Vagas limitadas • Online • 20h
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="container-section px-4 sm:px-6">
            <ScrollReveal className="text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
                💎 Por que você precisa estar
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4 sm:mb-6">
                Nesse Encontro?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12">
                Porque nada na sua vida muda até você mudar quem acredita ser.
                <br />
                <span className="text-primary font-medium">E quando você descobre sua identidade:</span>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {transformations.map((item, index) => (
                  <ScrollReveal key={index} animation="scale-in" delay={index * 80}>
                    <div className="p-3 sm:p-4 bg-card rounded-xl border border-primary/20 h-full">
                      <span className="text-primary text-sm sm:text-base">✨</span>
                      <p className="text-foreground text-xs sm:text-sm mt-1 sm:mt-2">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={600}>
                <p className="mt-8 sm:mt-12 text-sm sm:text-base text-muted-foreground">
                  Esse encontro é para você regressar ao seu design original.
                  <br />
                  <span className="text-primary font-semibold">A sua verdade. A sua essência. O seu destino.</span>
                </p>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container-section px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <ScrollReveal animation="scale-in">
                <div className="card-elegant text-center p-5 sm:p-8">
                  <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
                    📅 Detalhes do Mini Evento
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-3 sm:mt-4 mb-6 sm:mb-8">
                    A Verdade de Quem Você É Vai Te Libertar
                  </h2>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs sm:text-sm text-muted-foreground">Formato</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground">Online e gratuito</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs sm:text-sm text-muted-foreground">Duração</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground">60–90 minutos</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs sm:text-sm text-muted-foreground">Horário</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground">20h</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs sm:text-sm text-muted-foreground">Bônus</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground">PDF Exclusivo</p>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full text-sm sm:text-base" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <MessageCircle size={18} className="flex-shrink-0" />
                      <span>Garantir Minha Vaga Gratuita</span>
                      <ArrowRight size={18} className="flex-shrink-0" />
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 bg-foreground text-background">
          <div className="container-section px-4 sm:px-6">
            <ScrollReveal className="max-w-3xl mx-auto text-center">
              <Flame size={40} className="text-primary mx-auto mb-4 sm:mb-6 sm:w-12 sm:h-12" />
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
                Último Aviso Importante
              </h2>
              <p className="text-base sm:text-lg text-background/80 leading-relaxed mb-4">
                Este mini evento é curto, intenso e transformador.
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> </span>
                E eu vou te dizer a verdade:
              </p>
              <p className="text-lg sm:text-xl text-primary font-semibold mb-4">
                Identidade vale mais do que dinheiro.
              </p>
              <p className="text-sm sm:text-base text-background/70 mb-6 sm:mb-8">
                Porque quando você sabe quem é, você não apenas conquista —
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> </span>
                <span className="text-primary">você mantém.</span>
              </p>
              <p className="text-sm sm:text-base text-background/80 mb-6 sm:mb-8">
                E este mini evento é o primeiro passo para isso.
              </p>

              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-4 sm:px-6"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle size={18} className="flex-shrink-0" />
                  <span className="sm:hidden">Quero Descobrir Quem Eu Sou</span>
                  <span className="hidden sm:inline">Sim, Eu Quero Descobrir Quem Eu Realmente Sou</span>
                  <ArrowRight size={18} className="flex-shrink-0" />
                </a>
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default MiniCurso;
