import { experience } from "../data/portfolio";
import { SectionHeader } from "./About";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" data-testid="experience-section" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader title="Work" highlight="Experience" subtitle="Where I've been shipping production code" Icon={Briefcase} />

        <div className="relative mt-20">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  data-testid={`experience-item-${i}`}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center soft-shadow ring-4 ring-background">
                      <Briefcase size={18} />
                    </div>
                  </div>

                  <div className={`pl-16 md:pl-0 ${isLeft ? "md:pr-16" : "md:col-start-2 md:pl-16"}`}>
                    <article className="p-6 lg:p-7 rounded-2xl bg-card border border-border soft-shadow hover:-translate-y-1 transition-transform">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">{exp.role}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold whitespace-nowrap">
                          Full-time
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {exp.period}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin size={12} className="text-primary" /> {exp.location}</span>
                      </div>

                      <ul className="mt-5 space-y-2.5">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                            <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-[11px] font-semibold"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
