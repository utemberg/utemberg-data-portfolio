import { GraduationCap, LayoutDashboard, Users } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Treinamento Online",
    description: "Formação completa em Power BI do básico ao avançado. Aprenda a criar dashboards profissionais.",
  },
  {
    icon: LayoutDashboard,
    title: "Desenvolvimento de Dashboards",
    description: "Criação de dashboards personalizados e automatizados para sua empresa ou projeto.",
  },
  {
    icon: Users,
    title: "Consultoria na Área de Dados",
    description: "Assessoria especializada para implementar cultura de dados e otimizar processos.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        <h2 className="section-title mb-12">Como posso te ajudar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 text-center group hover:border-primary/40 transition-all duration-300 glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary-glow" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
