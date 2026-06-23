import { Card } from "@/components/ui/card";
import { Briefcase, Code2 } from "lucide-react";

const experiences = [
  {
    role: "Desenvolvedora Front-end Freelancer",
    company: "Projetos independentes — Landing Pages & Sites",
    period: "2024 – Presente",
    description:
      "Desenvolvimento de landing pages e sites sob demanda, do design à implementação e deploy em Vercel/Netlify. Foco em responsividade, performance e conversão.",
    highlights: [
      "Do design à implementação e deploy",
      "Foco em responsividade e conversão",
      "React · Tailwind CSS · TypeScript",
      "Vercel · Netlify · GitHub",
    ],
    Icon: Code2,
  },
  {
    role: "Áreas Financeira e Administrativa",
    company: "Empresas diversas",
    period: "≈ 2014 – 2023",
    description:
      "Cerca de 9 anos de atuação em rotinas financeiras e administrativas — análise, controle de processos e atendimento. Base sólida em rigor analítico e organização de dados, hoje aplicada ao desenvolvimento de sistemas.",
    highlights: [
      "Controle e análise de processos",
      "Gestão de equipes e documentos",
      "Rigor analítico e organização",
      "Habilidades transferidas para tech",
    ],
    Icon: Briefcase,
  },
];

const Experience = () => (
  <section id="experience" className="py-20 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex gap-6">
                <div className="hidden md:flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <exp.Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
