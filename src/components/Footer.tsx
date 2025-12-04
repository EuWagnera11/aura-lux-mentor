import { Instagram, Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container-section py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Sara Duarte
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Transformando vidas através do autoconhecimento, acolhimento e bem-estar feminino.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/mini-curso" className="text-muted-foreground hover:text-primary transition-colors">
                  Mini Curso
                </Link>
              </li>
              <li>
                <a href="/#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="/#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511981621509"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
                +55 11 98162-1509
              </a>
              <a
                href="https://instagram.com/saraduarteoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={18} />
                @saraduarteoficial
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sara Duarte. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart size={14} className="text-primary fill-primary" /> para mulheres em transformação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
