import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "O mini evento é realmente gratuito?",
    answer:
      "Sim, 100% gratuito! Este é um evento de transformação que ofereço para que você possa experimentar o poder do trabalho de identidade. Não há nenhum custo para participar.",
  },
  {
    question: "Preciso ter conhecimento prévio?",
    answer:
      "Não é necessário nenhum conhecimento prévio. O mini evento foi criado para mulheres em qualquer estágio da jornada de autoconhecimento. Você só precisa ter o coração aberto para transformação.",
  },
  {
    question: "Como funciona o evento online?",
    answer:
      "O evento acontece ao vivo através de uma plataforma de videoconferência. Você receberá o link de acesso pelo WhatsApp antes do evento. Basta ter internet e um dispositivo (celular, tablet ou computador).",
  },
  {
    question: "Vou receber gravação se não puder participar ao vivo?",
    answer:
      "A experiência ao vivo é muito mais transformadora, mas entendemos que imprevistos acontecem. Quem se inscrever receberá informações sobre o replay por tempo limitado.",
  },
  {
    question: "O que é o bônus PDF 'Ativação da Identidade'?",
    answer:
      "É um material exclusivo com declarações de identidade poderosas e exercícios práticos para você ativar todos os dias. Você receberá após participar do mini evento.",
  },
  {
    question: "Como faço para me inscrever?",
    answer:
      "Basta clicar em qualquer botão de inscrição nesta página. Você será direcionada para o WhatsApp onde poderá confirmar sua participação e receber todas as informações.",
  },
  {
    question: "Posso indicar para uma amiga?",
    answer:
      "Com certeza! Compartilhe esta página com mulheres que você sabe que precisam ouvir essa mensagem. Transformação é ainda mais poderosa quando vivida em comunidade.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-section">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            ❓ Perguntas Frequentes
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4">
            Tire Suas Dúvidas
          </h2>
          <p className="text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre o mini evento
          </p>
          <div className="section-divider mt-6" />
        </ScrollReveal>

        <ScrollReveal delay={200} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
