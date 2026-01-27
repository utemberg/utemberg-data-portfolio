import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    icon: Github,
    label: "Github",
    value: "github.com/utemberg",
    link: "https://github.com/utemberg",
  },
  {
    icon: Mail,
    label: "Email",
    value: "utembergsh@gmail.com",
    link: "mailto:utembergsh@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/utemberg",
    link: "https://www.linkedin.com/in/utemberg/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@utembergcont",
    link: "https://www.instagram.com/utembergcont/",
  },
];

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-40" />
      
      <div className="container relative z-10">
        <h2 className="section-title mb-12">Entre em contato comigo</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-300 glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <contact.icon className="w-7 h-7 text-primary-glow" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {contact.label}
              </h3>
              <p className="text-muted-foreground text-sm break-all">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Utemberg Moisés. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
