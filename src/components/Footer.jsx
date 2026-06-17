import { Linkedin, Github, Mail, ArrowUp, Heart } from "lucide-react";
import { profile } from "../data/portfolio";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <a href="#home" className="font-display font-extrabold text-2xl gradient-text">AS</a>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              {profile.name} · Laravel Developer crafting scalable web platforms from Delhi, India.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="footer-linkedin"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-testid="footer-github"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <Github size={16} />
            </a>
            <a href={profile.socials.email} aria-label="Email" data-testid="footer-email"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <Mail size={16} />
            </a>
            <a href="#home" data-testid="footer-back-to-top"
              className="ml-2 inline-flex items-center gap-2 px-4 h-10 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors">
              Back to top <ArrowUp size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-muted-foreground">
          <p>© {year} {profile.name}. All rights reserved.</p>
          {/* <p className="inline-flex items-center gap-1.5">
            Built with <Heart size={12} className="text-accent" /> using React + Tailwind
          </p> */}
        </div>
      </div>
    </footer>
  );
};
