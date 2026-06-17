import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";
import { SectionHeader } from "./About";
import { Code2, Server, Database, Plug, Cloud } from "lucide-react";

const groupIcons = { Backend: Server, Frontend: Code2, Database: Database, "APIs & Integrations": Plug, "Cloud & Tools": Cloud };

export const Skills = () => {
  return (
    <section id="skills" data-testid="skills-section" className="relative py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader title="Technical" highlight="Skills" subtitle="A comprehensive toolkit of modern technologies and frameworks I use to build scalable applications" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((sk, i) => {
            const Icon = groupIcons[sk.group] || Code2;
            return (
              <div
                key={sk.group}
                data-testid={`skill-group-${i}`}
                className="p-6 rounded-2xl bg-card border border-border soft-shadow hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-bold text-lg capitalize">{sk.group}</h3>
                </div>

                <div className="mt-5 space-y-4">
                  {sk.items.map((it) => (
                    <SkillBar key={it.name} name={it.name} level={it.level} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary font-semibold">Always Learning:</span>
            <span>Continuously exploring new technologies and best practices</span>
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Clean Code", "Best Practices", "Scalable Architecture"].map((t) => (
              <span key={t} className="px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-semibold text-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, level }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
};
