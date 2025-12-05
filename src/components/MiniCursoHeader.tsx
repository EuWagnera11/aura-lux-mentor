import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511981621509?text=Olá! Quero participar do Mini Evento: A Verdade de Quem Você É Vai Te Libertar";

const MiniCursoHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container-section px-4 sm:px-6" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="font-display text-xl sm:text-2xl font-semibold text-foreground">
            Sara Duarte
          </Link>

          <Button variant="hero" size="sm" className="text-xs lg:text-sm" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span className="hidden sm:inline">Saiba Mais</span>
              <span className="sm:hidden">Contato</span>
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default MiniCursoHeader;
