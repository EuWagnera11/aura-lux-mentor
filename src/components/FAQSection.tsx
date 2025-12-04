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
    <section className="py-16 sm:py-24 bg-background" itemScope itemType="https://schema.org/FAQPage">
      <div className="container-section px-4 sm:px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
            ❓ Perguntas Frequentes
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4">
            Tire Suas Dúvidas
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre o mini evento
          </p>
          <div className="section-divider mt-4 sm:mt-6" />
        </ScrollReveal>

        <ScrollReveal delay={200} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-4 sm:px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-shadow"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:text-primary py-4 sm:py-5">
                  <span itemProp="name">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent 
                  className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-5"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{faq.answer}</span>
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
