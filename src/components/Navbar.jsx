import { useEffect, useState } from "react";
import { Moon, Sun, Download, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <span className="font-display font-extrabold text-2xl tracking-tight gradient-text">
            AS
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            data-testid="nav-resume-download"
            href="/Anand_Shukla_Resume.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 px-4 h-10 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all soft-shadow"
          >
            <Download size={14} /> Resume
          </a>
          <button
            data-testid="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary text-foreground hover:text-primary flex items-center justify-center transition-all hover:scale-105"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background" data-testid="mobile-menu">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-${l.label.toLowerCase()}`}
              className="block px-6 py-4 border-b border-border text-sm font-medium hover:bg-muted hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Anand_Shukla_Resume.pdf"
            download
            className="block px-6 py-4 text-sm font-semibold bg-primary text-primary-foreground"
            data-testid="mobile-resume-download"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};
