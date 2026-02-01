import { Button } from "@/components/ui/button";
import { ChevronDown, Database, LineChart, BarChart3, PieChart, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const highlights = [
  "Especialista em extração de dados com SQL",
  "Dashboards interativos e automatizados com Power BI",
  "Análise de dados financeiros e operacionais",
  "Integração de múltiplas fontes de dados e ERPs",
];

const techBadges = [
  { name: "Power BI", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { name: "SQL", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "Python", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { name: "Excel Avançado", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  { name: "DAX", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { name: "ETL", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="relative mb-8 animate-fade-in">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/40 animate-pulse-glow">
              <img
                src={profilePhoto}
                alt="Utemberg Moisés"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-accent rounded-full border-4 border-background" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Utemberg</span>{" "}
            <span className="text-gradient">Moisés</span>
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <BarChart3 className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-medium text-foreground">Analista de Dados</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <MapPin className="w-4 h-4" />
            <span>Mossoró – Rio Grande do Norte, Brasil</span>
          </div>

          <ul className="space-y-3 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary-glow" />
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            {techBadges.map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${tech.color} transition-transform hover:scale-105`}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* 🔧 CORREÇÃO APLICADA APENAS AQUI */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-base glow-effect transition-all duration-300"
            >
              <a
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2"
              >
                <LineChart className="w-5 h-5" />
                Ver Projetos
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/40 text-foreground hover:bg-primary/10 px-8 py-6 text-base transition-all duration-300"
            >
              <a
                href="#sobre-mim"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("sobre-mim")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2"
              >
                Sobre mim
                <ChevronDown className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 opacity-20 animate-float hidden lg:block">
        <Database className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-20 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
        <PieChart className="w-16 h-16 text-primary-glow" />
      </div>
      <div className="absolute top-1/2 right-20 opacity-15 animate-float hidden lg:block" style={{ animationDelay: "4s" }}>
        <BarChart3 className="w-10 h-10 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
