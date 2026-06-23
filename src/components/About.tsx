import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Layout } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Linguagens",
      items: ["Python", "JavaScript", "HTML/CSS", "TypeScript"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Frameworks",
      items: ["PyTorch", "Tailwind CSS", "React.js"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA & ML",
      items: ["CNNs", "Transformers"],
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Conceitos",
      items: ["Boas Práticas", "Responsive Design", "Git & GitHub"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Olá! Sou Aline Lima, uma entusiasta de tecnologia apaixonada por
                explorar o mundo do desenvolvimento de software. Atualmente,
                estou cursando Análise e Desenvolvimento de Sistemas e IA onde
                tenho adquirido conhecimentos sólidos em diversas áreas da
                computação. Gosto de trabalhar com desenvolvimento web e
                aprendizado de máquina.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estudando{" "}
                <span className="text-primary font-semibold">
                  Análise e Desenvolvimento de Sistemas
                </span>{" "}
                na Universidade São Francisco.{" "}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105"
                >
                  <div className="space-y-3">
                    <div className="text-primary">{skill.icon}</div>
                    <h3 className="font-semibold text-foreground">
                      {skill.title}
                    </h3>
                    <ul className="space-y-1">
                      {skill.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
