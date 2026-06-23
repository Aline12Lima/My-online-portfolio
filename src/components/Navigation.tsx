import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "tools", "experience", "education", "contact"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollY = window.scrollY + 120;
      const active = [...sectionIds].reverse().find((id) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= scrollY;
      });
      setActiveSection(active ?? "home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#home", id: "home" },
    { label: "Sobre", href: "#about", id: "about" },
    { label: "Projetos", href: "#projects", id: "projects" },
    { label: "Ferramentas", href: "#tools", id: "tools" },
    { label: "Experiência", href: "#experience", id: "experience" },
    { label: "Formação", href: "#education", id: "education" },
    { label: "Contato", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-1">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                AL
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-primary/15 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Button */}
            <div className="flex-1 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-background border-b border-border shadow-lg animate-in slide-in-from-top duration-200">
          <div className="container mx-auto px-4 pt-16 pb-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-primary/15 text-primary"
                    : "text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
