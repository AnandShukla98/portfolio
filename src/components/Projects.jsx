import { projects } from "../data/portfolio";
import { SectionHeader } from "./About";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const initials = (title) => title.split(" ")[0][0];

export const Projects = () => {
  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          title="Featured"
          highlight="Projects"
          subtitle="A showcase of my recent work, demonstrating expertise in full-stack development, API integration, and scalable solutions."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              data-testid={`project-item-${i}`}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden soft-shadow hover:-translate-y-1.5 hover:border-primary/40 transition-all"
            >
              {/* Top banner */}
              <div className="relative h-44 bg-gradient-to-br from-primary/10 via-card to-accent/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, hsl(var(--blob-1)) 0%, transparent 50%), radial-gradient(circle at 70% 70%, hsl(var(--blob-2)) 0%, transparent 50%)" }} />
                <span className="relative font-display font-extrabold text-7xl gradient-text select-none">
                  {initials(p.title)}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold">
                  <CheckCircle2 size={12} /> Live
                </span>
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-card/80 backdrop-blur text-foreground text-[11px] font-semibold">
                  {p.domain}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-primary/90 font-medium">{p.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[11px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-2 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground truncate">
                    {new URL(p.url).hostname}
                  </span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-link-${i}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    View Live <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
