import { profile, metrics } from "../data/portfolio";
import { CheckCircle2, Award, ListChecks, Zap, Users } from "lucide-react";

const icons = [Award, ListChecks, Zap, Users];

export const About = () => {
  const competencies = ["Laravel", "PHP", "React", "Next.js", "MySQL", "REST APIs", "Performance Optimization"];

  return (
    <section id="about" data-testid="about-section" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader title="About" highlight="Me" subtitle="Get to know the developer behind the code" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {profile.summary}
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "4+ years of professional Laravel & full-stack development",
                "Specialized in Laravel, PHP, React, Next.js, and MySQL",
                "Independently delivered travel CRM, meta-search & e-commerce platforms",
                "Expert in third-party API integration & performance optimization",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                  <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={18} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h3 className="font-display font-semibold text-foreground mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <span
                    key={c}
                    className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={m.label}
                    data-testid={`metric-${i}`}
                    className="relative p-6 rounded-2xl bg-card border border-border soft-shadow hover:-translate-y-1 transition-transform"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-display font-extrabold text-4xl gradient-text">{m.value}</div>
                        <div className="mt-1 text-xs md:text-sm text-muted-foreground font-medium">{m.label}</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-6 lg:p-7 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground soft-shadow">
              <h3 className="font-display font-bold text-xl">Looking for opportunities</h3>
              <p className="mt-2 text-primary-foreground/90 text-sm leading-relaxed">
                Open to senior Laravel and full-stack roles where I can ship production-grade
                platforms and grow with a thoughtful team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({ title, highlight, subtitle, Icon }) => (
  <div className="text-center">
    <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight inline-flex items-center gap-3 justify-center">
      {Icon && <Icon className="text-primary" size={36} />}
      <span>
        {title} <span className="text-primary">{highlight}</span>
      </span>
    </h2>
    <div className="mt-4 mx-auto accent-line" />
    {subtitle && (
      <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">{subtitle}</p>
    )}
  </div>
);
