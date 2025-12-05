import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/", isAnchor: false },
    { name: "Sobre", path: "/#sobre", isAnchor: true, anchor: "sobre" },
    { name: "Depoimentos", path: "/#depoimentos", isAnchor: true, anchor: "depoimentos" },
    { name: "Contato", path: "/#contato", isAnchor: true, anchor: "contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.isAnchor && link.anchor) {
      if (location.pathname === "/") {
        // Already on homepage, just scroll
        const element = document.getElementById(link.anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to homepage first, then scroll
        window.location.href = link.path;
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container-section px-4 sm:px-6" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="font-display text-xl sm:text-2xl font-semibold text-foreground">
            Sara Duarte
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button variant="hero" size="sm" className="text-xs lg:text-sm" asChild>
              <a href="https://wa.me/5511981621509?text=Olá Sara! Gostaria de saber mais sobre a mentoria." target="_blank" rel="noopener noreferrer">
                Falar com Sara
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 sm:py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link)}
                    className={`text-base font-medium py-2 text-left ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-medium py-2 ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Button variant="hero" className="mt-3" asChild>
                <a href="https://wa.me/5511981621509?text=Olá Sara! Gostaria de saber mais sobre a mentoria." target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  Falar com Sara
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
