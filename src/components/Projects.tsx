import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Github as GithubIcon,
  ExternalLink,
  Cpu,
  FileText,
  Activity,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Code2,
} from "lucide-react";
import img3 from "@/assets/Mari.Nutri.jpg";
import img4 from "@/assets/Saloncapa.png";
import img5 from "@/assets/Capa_ande_card.png";
import img6 from "@/assets/odonto.png";
import img7 from "@/assets/capaPsi.png";
import img8 from "@/assets/capaJB.png";
import img9 from "@/assets/wm.png";

interface FrontendProject {
  title: string;
  type: string;
  image?: string;
  site?: string;
  repository: string;
}

interface IAProject {
  title: string;
  type: string;
  description: string;
  status: string;
  repository: string;
  icon: React.ReactNode;
  highlights?: string[];
}

interface CompactProject {
  title: string;
  type: string;
  repository: string;
}

const statusColors: Record<string, string> = {
  "IC — Em andamento": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Em andamento": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Concluído: "bg-green-500/20 text-green-400 border-green-500/30",
  Acadêmico: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const featuredIA: IAProject = {
  title: "Pneumonia X-Ray — Mitigação de Viés",
  type: "Deep Learning · Visão Computacional",
  description:
    "Iniciação Científica na USF: classificação de pneumonia pediátrica em raios-X com DenseNet121 + CBAM, investigando shortcut learning via análise do espaço latente com UMAP e HDBSCAN.",
  status: "IC — Em andamento",
  repository: "https://github.com/Aline12Lima/pneumonia-xray-bias-mitigation",
  icon: <Activity className="w-12 h-12" />,
  highlights: [
    "DenseNet121 baseline vs DenseNet121 + CBAM",
    "Análise do espaço latente com UMAP e HDBSCAN",
    "3 macroclusters → 47 microclusters morfológicos",
    "Coautoria em 3 artigos científicos (Revista USF)",
  ],
};

const iaProjects: IAProject[] = [
  {
    title: "Previsor de Burnout com IA",
    type: "Machine Learning · Classificação",
    description:
      "Pipeline ML: Random Forest → Gradient Boosting → Rede Neural (PyTorch) com loop de feedback. Dataset de 50k registros com apps interativos em Streamlit.",
    status: "Concluído",
    repository: "https://github.com/Aline12Lima/previsor-burnout-ia",
    icon: <Brain className="w-10 h-10" />,
  },
  {
    title: "NLP Project",
    type: "Processamento de Linguagem Natural",
    description:
      "Microsserviços (Docker + n8n) com RoBERTa (sentimento) e BART (sumarização) do Hugging Face. Persistência em PostgreSQL e API via webhook.",
    status: "Em andamento",
    repository: "https://github.com/Aline12Lima/nlp-project",
    icon: <FileText className="w-10 h-10" />,
  },
  {
    title: "Content Pipeline IA",
    type: "Automação · NLP",
    description:
      "Pipeline automatizado de análise de conteúdo com modelos do Hugging Face. Persistência em PostgreSQL e API via webhook.",
    status: "Concluído",
    repository: "https://github.com/Aline12Lima/content-pipelin",
    icon: <Cpu className="w-10 h-10" />,
  },
  {
    title: "ExataMente — USF",
    type: "Machine Learning · Acadêmico",
    description:
      "Plataforma web com Google Gemini para material de estudo personalizado de exatas. Frontend em React, React Flow e KaTeX. Backend em Python/FastAPI.",
    status: "Acadêmico",
    repository:
      "https://github.com/Aline12Lima/EXATAMENTE---Projeto---USF---EXATAS",
    icon: <BookOpen className="w-10 h-10" />,
  },
];

const featuredFrontend: FrontendProject = {
   
    title: "Site - JB Construtora",
    type: "Site Completo",
    image: img8,
    site: "https://jb-construtech.vercel.app/",
    repository: "https://github.com/Aline12Lima/JB_Construtech",
  
};

const mainFrontend: FrontendProject[] = [
  {

  title: "Site - WM Topografia",
  type: "Projeto Principal · React + Tailwind + Vite",
  image: img9,
  site: "https://wmtopografiaegeo.com.br/",
  repository: "https://github.com/genevieve-web-site/wm-topografia",
  },
 
  {
    title: "Psicóloga Angela",
    type: "Landing Page + Formulário",
    image: img7,
    site: "https://psi-angela.alinelima.dev/",
    repository: "https://github.com/Aline12Lima/PsiAngela",
  },
  {
    title: "Beauty Salon",
    type: "Site Completo",
    image: img4,
    site: "https://salon-x-nu.vercel.app/",
    repository: "https://github.com/Aline12Lima/SalonX",
  },
  {
    title: "Clínica Odontológica",
    type: "SPA",
    image: img6,
    site: "https://odonto-care.alinelima.dev/",
    repository: "https://github.com/Aline12Lima/OralCare",
  },
  {
    title: "Nutricionista",
    type: "Landing Page",
    image: img3,
    site: "https://marianne-nutricionista.vercel.app/",
    repository: "https://github.com/Aline12Lima/marianne-nutricionista",
  },
  {
    title: "ONG ANDE",
    type: "Landing Page",
    image: img5,
    site: "https://ong-ande.vercel.app/",
    repository: "https://github.com/Aline12Lima/Projeto_Voluntario",
  },
];

const otherFrontend: CompactProject[] = [
  {
    title: "Vini Gesso Reformas",
    type: "Landing Page",
    repository: "https://github.com/Aline12Lima/viniGesso",
  },
  {
    title: "Rafa Botelho Salão de Beleza",
    type: "Landing Page",
    repository: "https://github.com/Aline12Lima/rafa_botelho",
  },
  {
    title: "FFF",
    type: "Landing Page",
    repository: "https://github.com/Aline12Lima/FFF",
  },
  {
    title: "Socorro Lima Terapeuta",
    type: "Landing Page",
    repository: "https://github.com/genevieve-web-site/Socorro-Lima",
  },
  {
    title: "Elaine Paiva Cabeleleira ",
    type: "Landing Page",
    repository: "https://github.com/genevieve-web-site/ElainePaiva",
  },
  {
    title: "Eng. Mayra",
    type: "Landing Page",
    repository: "https://github.com/genevieve-web-site/engMayra",
  },
  {
    title: "Genevieve WebSites ",
    type: "Site Completo",
    repository: "",
  },
];

const FeaturedIACard = ({ project }: { project: IAProject }) => (
  <Card className="overflow-hidden border-primary/30 hover:border-primary transition-all duration-300 group">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-52 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex flex-col items-center justify-center p-8 gap-4 shrink-0">
        <div className="text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
          {project.icon}
        </div>
        <span
          className={`text-xs px-3 py-1 rounded-full border font-medium ${
            statusColors[project.status] ??
            "bg-muted text-muted-foreground border-border"
          }`}
        >
          {project.status}
        </span>
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <span className="text-xs text-primary font-medium uppercase tracking-wider">
            {project.type}
          </span>
          <h3 className="text-xl md:text-2xl font-bold mt-1">{project.title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {project.description}
        </p>
        {project.highlights && (
          <ul className="grid sm:grid-cols-2 gap-2">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-2">
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
          >
            <GithubIcon size={13} /> Repositório
          </a>
        </div>
      </div>
    </div>
  </Card>
);

const IACard = ({ project }: { project: IAProject }) => (
  <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 group flex flex-col">
    <div className="p-6 bg-gradient-to-br from-primary/10 to-background flex flex-col items-center gap-3 shrink-0">
      <div className="text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        {project.icon}
      </div>
      <span
        className={`text-xs px-3 py-1 rounded-full border font-medium ${
          statusColors[project.status] ??
          "bg-muted text-muted-foreground border-border"
        }`}
      >
        {project.status}
      </span>
    </div>
    <div className="p-4 space-y-3 flex flex-col flex-1">
      <div>
        <span className="text-xs text-primary font-medium uppercase tracking-wider">
          {project.type}
        </span>
        <h3 className="text-base font-semibold mt-0.5">{project.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="mt-auto pt-1">
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
        >
          <GithubIcon size={13} /> Repositório
        </a>
      </div>
    </div>
  </Card>
);

const FeaturedFrontendCard = ({ project }: { project: FrontendProject }) => (
  <Card className="overflow-hidden border-primary/40 hover:border-primary transition-all duration-300 group flex flex-col lg:col-span-2">
    <div className="relative aspect-video overflow-hidden bg-muted shrink-0">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
          <span className="text-primary font-bold text-5xl opacity-40">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </span>
        </div>
      )}
      <div className="absolute top-3 left-3">
        <span className="text-xs px-3 py-1 bg-primary text-white rounded-full font-semibold shadow">
          Projeto Principal
        </span>
      </div>
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-5 flex flex-col gap-3 flex-1">
      <div>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <span className="text-sm text-primary">{project.type}</span>
      </div>
      <div className="flex gap-3 mt-auto flex-wrap">
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
          >
            <ExternalLink size={13} /> Ver Site
          </a>
        )}
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
        >
          <GithubIcon size={13} /> Repositório
        </a>
      </div>
    </div>
  </Card>
);

const FrontendCard = ({ project }: { project: FrontendProject }) => (
  <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 group flex flex-col">
    <div className="relative aspect-video overflow-hidden bg-muted shrink-0">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
          <span className="text-primary font-bold text-3xl opacity-40 select-none">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-4 space-y-3 flex flex-col flex-1">
      <div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="text-sm text-primary">{project.type}</span>
      </div>
      <div className="flex gap-3 pt-2 mt-auto flex-wrap">
        {project.site ? (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
          >
            <ExternalLink size={13} /> Ver Site
          </a>
        ) : (
          <span className="text-sm px-4 py-2 bg-muted text-muted-foreground rounded-md cursor-default">
            URL em breve
          </span>
        )}
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
        >
          <GithubIcon size={13} /> Repositório
        </a>
      </div>
    </div>
  </Card>
);

const OtherProjectsPanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/30 transition-colors group"
      >
        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          +{otherFrontend.length} outros projetos
        </span>
        {open ? (
          <ChevronUp size={16} className="text-muted-foreground" />
        ) : (
          <ChevronDown size={16} className="text-muted-foreground" />
        )}
      </button>
      {open && (
        <div className="border-t border-border grid sm:grid-cols-2 lg:grid-cols-3">
          {otherFrontend.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-5 py-3 hover:bg-secondary/20 transition-colors border-b border-border/50 last:border-b-0"
            >
              <div>
                <p className="text-sm font-medium">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.type}</p>
              </div>
              <a
                href={p.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors ml-3"
                aria-label={`GitHub de ${p.title}`}
              >
                <GithubIcon size={16} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="py-20 px-4">
    <div className="container mx-auto max-w-6xl space-y-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Projetos</h2>
        <div className="w-20 h-1 bg-primary mx-auto" />
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Pesquisa em Inteligência Artificial e Desenvolvimento Web — IC,
          freelance e projetos acadêmicos.
        </p>
      </div>

      {/* IA Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              Pesquisa & Inteligência Artificial
            </h3>
            <p className="text-sm text-muted-foreground">
              Iniciação Científica e Machine Learning
            </p>
          </div>
        </div>

        <FeaturedIACard project={featuredIA} />

        <div className="grid gap-5 sm:grid-cols-2">
          {iaProjects.map((p, i) => (
            <IACard key={i} project={p} />
          ))}
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Frontend Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Projetos Front-end</h3>
            <p className="text-sm text-muted-foreground">
              Landing Pages e Sites — React · Tailwind · Vite
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeaturedFrontendCard project={featuredFrontend} />
          {mainFrontend.map((p, i) => (
            <FrontendCard key={i} project={p} />
          ))}
        </div>

        <OtherProjectsPanel />
      </div>
    </div>
  </section>
);

export default Projects;
