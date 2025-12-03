import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Lock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulating API call - Replace with actual Stripe integration
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá um e-mail com o acesso ao mini curso.",
      });
    }, 2000);
  };

  const included = [
    "4 aulas em vídeo exclusivas",
    "Material de apoio em PDF",
    "Exercícios práticos para aplicar",
    "Certificado de conclusão",
    "Acesso por 1 ano completo",
    "Suporte via comunidade",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-warm-cream via-background to-warm-beige min-h-[calc(100vh-5rem)]">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Order Summary */}
                <div className="order-2 lg:order-1 animate-fade-up">
                  <div className="card-elegant">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Resumo do Pedido
                    </h2>

                    <div className="border-b border-border/50 pb-6 mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground">
                            Mini Curso: Desperte Sua Essência
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Acesso completo ao curso
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground line-through">R$ 197,00</p>
                          <p className="font-display text-xl font-semibold text-primary">
                            Gratuito
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Included items */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-4">O que está incluso:</h4>
                      <ul className="space-y-3">
                        {included.map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-sm">
                            <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Total */}
                    <div className="border-t border-border/50 pt-6">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">Total</span>
                        <span className="font-display text-2xl font-semibold text-primary">
                          R$ 0,00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checkout Form */}
                <div className="order-1 lg:order-2 animate-fade-up delay-200">
                  <div className="card-elegant">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Finalize sua inscrição
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Preencha seus dados para garantir sua vaga
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome completo</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Processando..." : "Garantir Minha Vaga Gratuita"}
                      </Button>

                      {/* Security badges */}
                      <div className="flex items-center justify-center gap-6 pt-4 text-muted-foreground">
                        <div className="flex items-center gap-2 text-xs">
                          <Lock size={14} />
                          <span>Dados seguros</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Shield size={14} />
                          <span>Privacidade garantida</span>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* Trust message */}
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    Ao se inscrever, você concorda com nossos termos de uso e política de privacidade.
                  </p>
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

export default Checkout;
