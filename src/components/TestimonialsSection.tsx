import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Clara",
      role: "Empresária",
      content:
        "A mentoria transformou completamente minha relação comigo mesma. Aprendi a me ouvir e respeitar meus limites. Sou uma mulher mais plena e feliz hoje.",
      rating: 5,
    },
    {
      name: "Ana Paula",
      role: "Mãe e Profissional",
      content:
        "Encontrei o equilíbrio que tanto procurava. O acolhimento e as ferramentas que recebi me ajudaram a conciliar maternidade e carreira sem culpa.",
      rating: 5,
    },
    {
      name: "Juliana Santos",
      role: "Professora",
      content:
        "Depois de anos me sentindo perdida, finalmente encontrei meu propósito. A mentoria me deu clareza e coragem para seguir meus sonhos.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4">
            Histórias de{" "}
            <span className="text-gradient">transformação</span>
          </h2>
          <p className="text-muted-foreground">
            Veja o que mulheres como você dizem sobre sua jornada de autoconhecimento
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elegant group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-primary/20 mb-4 group-hover:text-primary/40 transition-colors"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
