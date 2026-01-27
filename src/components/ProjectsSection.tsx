import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dashboard Logística",
    description: "Painel completo para gestão logística com indicadores de performance de entregas, rotas otimizadas e controle de frota.",
    link: "#",
    image: null,
  },
  {
    title: "Dashboard Marketing",
    description: "Análise de campanhas, ROI de marketing, funil de conversão e métricas de engajamento em tempo real.",
    link: "#",
    image: null,
  },
  {
    title: "Dashboard Estoque",
    description: "Controle de inventário, previsão de demanda, alertas de reposição e análise de giro de produtos.",
    link: "#",
    image: null,
  },
  {
    title: "Dashboard Financeiro",
    description: "Demonstrativos financeiros, fluxo de caixa, análise de receitas e despesas com projeções futuras.",
    link: "#",
    image: null,
  },
  {
    title: "Dashboard Compras",
    description: "Gestão de fornecedores, análise de custos, performance de compras e negociações estratégicas.",
    link: "#",
    image: null,
  },
  {
    title: "Dashboard Projetos",
    description: "Acompanhamento de projetos, cronogramas, alocação de recursos e indicadores de progresso.",
    link: "#",
    image: null,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container relative z-10">
        <h2 className="section-title mb-4">Projetos Desenvolvidos</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Explore alguns projetos que já desenvolvi
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <BarChart3Icon className="w-16 h-16 text-primary/40 relative z-10" />
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    Ver detalhes
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple icon component for placeholder
const BarChart3Icon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
);

export default ProjectsSection;
