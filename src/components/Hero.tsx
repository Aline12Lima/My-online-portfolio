import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import fotoPerfilSrc from "@/assets/perfil_foto.jpeg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(173,80%,20%),transparent_50%)] opacity-30"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="mx-auto w-36 h-36 md:w-48 md:h-48 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary/40 shadow-[0_0_32px_rgba(0,200,180,0.25)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img
                  src={fotoPerfilSrc}
                  alt="Foto de Aline Lima"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <p className="text-primary text-lg font-medium">Olá, eu sou</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Aline Lima
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Estudante de Análise e Desenvolvimento de Sistemas | Foco em{" "}
              <span className="text-primary font-semibold">
                Machine Learning
              </span>{" "}
              e{" "}
              <span className="text-primary font-semibold">
                Desenvolvimento Web
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="bg-primary hover:bg-accent text-white font-semibold"
            >
              Ver Projetos
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Contato
            </Button>
          </div>

          <div className="flex gap-6 justify-center items-center pt-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <a
              href="https://www.linkedin.com/in/aline-lima-397a84202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Aline12Lima"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:ads.alinelima@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
