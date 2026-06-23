import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade São Francisco (USF)",
    period: "2025 – Previsão: Junho de 2027",
    status: "Em andamento",
  },
  {
    degree: "Machine Learning Intensivo",
    institution: "Curso Internacional",
    period: "Redes Neurais, Transformers, teoria e projetos práticos · 2026 – presente",
    status: "Em andamento",
  },
  {
    degree: "Inglês — University of Malta",
    institution: "Presencial (Concluído) · Online (Em andamento)",
    period: "Nível Pré-intermediário · 2026",
    status: "Em andamento",
  },
  {
    degree: "Tecnólogo em Gestão de Recursos Humanos",
    institution: "Centro Universitário do Distrito Federal (UDF)",
    period: "2015 – 2017",
    status: "Concluído",
  },
  {
    degree: "Formação em Desenvolvimento Web",
    institution: "Rocketseat",
    period: "HTML, CSS, JavaScript, React, Node.js e projetos práticos · 2024",
    status: "Concluído",
  },
  {
    degree: "Introdução à Ciência da Computação (CS50)",
    institution: "Harvard University / edX",
    period: "Fundamentos de programação, algoritmos e estruturas de dados · 2024",
    status: "Concluído",
  },
  {
    degree: "Python for Beginners",
    institution: "OpenCV University",
    period: "Introdução à linguagem Python · 2025",
    status: "Concluído",
  },
];

const Education = () => (
  <section id="education" className="py-20 px-4 bg-secondary/20">
    <div className="container mx-auto max-w-6xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Formação & Certificações
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {edu.period}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      edu.status === "Em andamento"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
