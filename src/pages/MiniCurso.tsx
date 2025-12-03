import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
                  <span className="text-sm font-medium text-foreground">Mini Evento Gratuito</span>
                </div>

                <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
                  A Verdade de Quem Você É{" "}
                  <span className="text-gradient">Vai Te Libertar</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                  Desperte sua verdadeira identidade. Ative sua segurança. Entre no seu destino.
                </p>

                <div className="flex flex-wrap gap-6 mb-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span>60–90 minutos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>Online • 20h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift size={18} className="text-primary" />
                    <span>100% Gratuito</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} />
                    Quero Participar do Mini Evento
                    <ArrowRight size={20} />
                  </a>
                </Button>
              </div>

              <div className="relative animate-fade-up delay-200">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img
                    src={speakingPhoto}
                    alt="Mentora palestrando sobre identidade e transformação feminina"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-24 bg-foreground text-background">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <Flame size={48} className="text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
                A maior prisão não é o medo.
                <br />
                <span className="text-primary">É não saber quem você realmente é.</span>
              </h2>
              <p className="text-lg text-background/80 leading-relaxed mb-6">
                A maioria das mulheres não fracassa por falta de força, inteligência ou fé.
                Elas fracassam porque não sabem quem são.
              </p>
              <p className="text-background/70 leading-relaxed">
                Vivem apagando incêndios emocionais, tentando ser aceitas, tentando agradar, tentando "merecer" algo…
                Mas nenhuma vida se sustenta quando a identidade está ferida.
                E é exatamente isso que eu vou destravar em você.
              </p>
            </div>
          </div>
        </section>

        {/* The Promise */}
        <section className="py-24 bg-secondary/30">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                Quando você entende quem é, você se posiciona.
              </h2>
              <p className="text-xl text-primary font-medium">
                Quando você se posiciona, você conquista.
                <br />
                E quando conquista, você sustenta.
              </p>
              <div className="section-divider mt-8" />
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-24 bg-background">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                ✨ O que vai acontecer
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4">
                Nesse Mini Evento
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="card-elegant text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <module.icon size={32} className="text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium">{index + 1}.</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">{module.title}</h3>
                  <p className="text-sm text-primary mb-4">{module.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
              Esse encontro vai ativar dentro de você um nível de clareza que muda comportamento, decisões e destino.
            </p>
          </div>
        </section>

        {/* For Who */}
        <section className="py-24 bg-warm-cream">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                🎙 Para quem é
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4">
                Esse Mini Evento?
              </h2>
              <p className="text-muted-foreground">Para mulheres que:</p>
              <div className="section-divider" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {forWho.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-muted-foreground mt-12 italic">
              Se você sente que está vivendo muito abaixo do seu potencial…
              <br />
              <span className="text-primary font-semibold">este é o seu chamado.</span>
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-up">
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    🚀 O que você vai ganhar
                  </span>
                  <h2 className="font-display text-3xl font-semibold text-foreground mt-2 mb-8">
                    Participando
                  </h2>

                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 text-lg font-medium text-foreground">
                    E principalmente:
                    <br />
                    <span className="text-primary">🔥 A capacidade de sustentar tudo o que você conquistar daqui pra frente.</span>
                  </p>
                </div>

                {/* CTA Card */}
                <div className="animate-fade-up delay-200">
                  <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-center">
                    <Heart size={48} className="text-primary-foreground mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                      Inscrição Gratuita
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Garanta sua vaga agora e desperte sua verdadeira identidade
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      asChild
                    >
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={20} />
                        Quero Participar
                        <ArrowRight size={20} />
                      </a>
                    </Button>
                    <p className="text-xs text-primary-foreground/60 mt-4">
                      Vagas limitadas • Online • 20h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-24 bg-secondary/30">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                💎 Por que você precisa estar
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-6">
                Nesse Encontro?
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Porque nada na sua vida muda até você mudar quem acredita ser.
                <br />
                <span className="text-primary font-medium">E quando você descobre sua identidade:</span>
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {transformations.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card rounded-xl border border-primary/20 animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-primary">✨</span>
                    <p className="text-foreground text-sm mt-2">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-12 text-muted-foreground">
                Esse encontro é para você regressar ao seu design original.
                <br />
                <span className="text-primary font-semibold">A sua verdade. A sua essência. O seu destino.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-24 bg-background">
          <div className="container-section">
            <div className="max-w-2xl mx-auto">
              <div className="card-elegant text-center animate-fade-up">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  📅 Detalhes do Mini Evento
                </span>
                <h2 className="font-display text-2xl font-semibold text-foreground mt-4 mb-8">
                  A Verdade de Quem Você É Vai Te Libertar
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Formato</p>
                    <p className="font-semibold text-foreground">Online e totalmente gratuito</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Duração</p>
                    <p className="font-semibold text-foreground">60–90 minutos</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Horário</p>
                    <p className="font-semibold text-foreground">20h</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Bônus</p>
                    <p className="font-semibold text-foreground">PDF "Ativação da Identidade"</p>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} />
                    Garantir Minha Vaga Gratuita
                    <ArrowRight size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-foreground text-background">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <Flame size={48} className="text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
                Último Aviso Importante
              </h2>
              <p className="text-lg text-background/80 leading-relaxed mb-4">
                Este mini evento é curto, intenso e transformador.
                <br />
                E eu vou te dizer a verdade:
              </p>
              <p className="text-xl text-primary font-semibold mb-4">
                Identidade vale mais do que dinheiro.
              </p>
              <p className="text-background/70 mb-8">
                Porque quando você sabe quem é, você não apenas conquista —
                <br />
                <span className="text-primary">você mantém.</span>
              </p>
              <p className="text-background/80 mb-8">
                E este mini evento é o primeiro passo para isso.
              </p>

              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} />
                  Sim, Eu Quero Descobrir Quem Eu Realmente Sou
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MiniCurso;
