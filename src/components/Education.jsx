import { education } from "../data/portfolio";
import { SectionHeader } from "./About";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" data-testid="education-section" className="relative py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader title="" highlight="Education" subtitle="Academic foundation in computer applications and software development" Icon={GraduationCap} />

        <div className="relative mt-20">
          {/* Center timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {education.map((ed, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  data-testid={`education-item-${i}`}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
                >
                  {/* Center icon dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center soft-shadow ring-4 ring-background">
                      <GraduationCap size={18} />
                    </div>
                  </div>

                  <div className={`pl-16 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                    <article className="p-6 lg:p-7 rounded-2xl bg-card border border-border soft-shadow hover:-translate-y-1 transition-transform">
                      <div className={`flex flex-wrap items-center gap-2 text-xs text-muted-foreground ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="inline-flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {ed.period}</span>
                      </div>
                      <h3 className="mt-3 font-display font-bold text-xl md:text-2xl text-foreground leading-snug">
                        {ed.degree}
                      </h3>
                      <p className={`mt-2 inline-flex items-center gap-1.5 text-sm text-primary font-medium ${isLeft ? "md:justify-end" : ""}`}>
                        <MapPin size={12} /> {ed.institute}
                      </p>
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
