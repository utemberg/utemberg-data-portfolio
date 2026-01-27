const AboutSection = () => {
  return (
    <section id="sobre-mim" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-50" />
      
      <div className="container relative z-10">
        <h2 className="section-title mb-12">Sobre mim</h2>
        
        <div className="glass-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Highlighted number */}
            <div className="flex-shrink-0 text-center md:text-left">
              <span className="text-7xl md:text-8xl font-display font-bold text-accent">5+</span>
              <p className="text-muted-foreground mt-2 text-sm uppercase tracking-wider">Anos de<br />experiência</p>
            </div>
            
            {/* Description */}
            <div className="flex-1">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Analista de Dados com mais de 5 anos de experiência atuando na 
                interseção entre tecnologia, dados, contabilidade e processos de 
                negócio, com forte vivência em ERPs corporativos, análise financeira 
                e suporte à tomada de decisão.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["SQL", "Power BI", "Python", "Excel", "ETL", "DAX"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
