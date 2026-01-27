import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Utemberg</span>{" "}
              <span className="text-gradient">Moisés</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Especialista em extração de dados com SQL. Desenvolvo dashboards 
              interativos e automatizados para diferentes áreas de negócio.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-lg glow-effect transition-all duration-300"
            >
              <a href="#sobre-mim" className="inline-flex items-center gap-2">
                Sobre mim
                <ChevronDown className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary/40">UM</span>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-float" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
