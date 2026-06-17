import { ArrowRight, Download, MapPin, Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import { profile } from "../data/portfolio";

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Soft blob background */}
      <div className="blob w-[480px] h-[480px] -top-32 -left-32" style={{ background: "hsl(var(--blob-1))" }} />
      <div className="blob w-[420px] h-[420px] -top-10 -right-20" style={{ background: "hsl(var(--blob-2))" }} />
      <div className="blob w-[520px] h-[520px] bottom-0 left-1/4" style={{ background: "hsl(var(--blob-3))" }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Hello, I&apos;m
        </span>

        <h1
          data-testid="hero-name"
          className="mt-6 font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] text-foreground fade-up"
          style={{ animationDelay: "0.12s" }}
        >
          Anand Shukla
        </h1>

        <h2
          className="mt-4 font-display font-semibold text-2xl md:text-3xl lg:text-4xl gradient-text fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Laravel Developer
        </h2>

        <p
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed fade-up"
          style={{ animationDelay: "0.28s" }}
        >
          Building scalable web applications, REST APIs, and CRM platforms across travel,
          e-commerce, and SaaS domains.
        </p>

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-primary" /> {profile.location}
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-border" />
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={14} className="text-primary" /> {profile.email}
          </a>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 fade-up"
          style={{ animationDelay: "0.42s" }}
        >
          <a
            data-testid="hero-cta-resume"
            href="/Anand_Shukla_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all soft-shadow"
          >
            <Download size={16} /> Download Resume (PDF)
          </a>
          <a
            data-testid="hero-cta-contact"
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 h-12 rounded-full border-2 border-foreground/20 text-foreground text-sm font-semibold hover:border-primary hover:text-primary transition-all"
          >
            Let&apos;s Talk
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-3 fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <SocialBtn href={profile.socials.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" testid="hero-social-linkedin" />
          <SocialBtn href={profile.socials.github} icon={<Github size={16} />} label="GitHub" testid="hero-social-github" />
          <SocialBtn href={profile.socials.email} icon={<Mail size={16} />} label="Email" testid="hero-social-email" />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-border bg-card/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary animate-bounce"
        data-testid="hero-scroll-indicator"
      >
        <ChevronDown size={16} />
      </a>
    </section>
  );
};

const SocialBtn = ({ href, icon, label, testid }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    data-testid={testid}
    className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1 transition-all soft-shadow"
  >
    {icon}
  </a>
);
