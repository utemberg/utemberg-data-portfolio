import { BarChart3, Layout, Target, TrendingUp } from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Visualização & Análise de Dados",
    description: "Transformo dados brutos em insights visuais claros e acionáveis utilizando as melhores práticas de visualização.",
  },
  {
    icon: Layout,
    title: "Design de Dashboards",
    description: "Crio dashboards interativos e intuitivos que facilitam a tomada de decisão em tempo real.",
  },
  {
    icon: Target,
    title: "Gestão de Projetos",
    description: "Gerencio projetos de dados do início ao fim, garantindo entregas de qualidade dentro do prazo.",
  },
  {
    icon: TrendingUp,
    title: "KPI's",
    description: "Defino e monitoro indicadores-chave de desempenho alinhados aos objetivos estratégicos do negócio.",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        <h2 className="section-title mb-12">Principais Habilidades</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card p-6 group hover:border-primary/40 transition-all duration-300 glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary-glow" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
