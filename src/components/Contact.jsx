import { useState } from "react";
import { profile } from "../data/portfolio";
import { SectionHeader } from "./About";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email and message");
      return;
    }
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind or want to discuss opportunities? Feel free to reach out!"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left info */}
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">Let&apos;s Connect</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              be part of your vision.
            </p>

            <div className="mt-8 space-y-4">
              <ContactCard icon={<Mail size={20} />} label="Email" value={profile.email} href={`mailto:${profile.email}`} testid="contact-email" />
              <ContactCard icon={<Phone size={20} />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s+/g, "")}`} testid="contact-phone" />
              <ContactCard icon={<MapPin size={20} />} label="Location" value={profile.location} testid="contact-location" />
            </div>

            <div className="mt-8">
              <h4 className="font-display font-semibold text-foreground mb-3">Follow Me</h4>
              <div className="flex gap-3">
                <SocialIcon href={profile.socials.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" testid="social-linkedin" color="bg-[#0A66C2]" />
                <SocialIcon href={profile.socials.github} icon={<Github size={18} />} label="GitHub" testid="social-github" color="bg-foreground" />
                <SocialIcon href={profile.socials.email} icon={<Mail size={18} />} label="Email" testid="social-email" color="bg-primary" />
              </div>
            </div>
          </div>

          {/* Right form */}
          <form
            data-testid="contact-form"
            onSubmit={onSubmit}
            className="p-7 lg:p-8 rounded-2xl bg-card border border-border soft-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field
                label="Name"
                testid="contact-input-name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
              />
              <Field
                label="Email"
                type="email"
                testid="contact-input-email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@email.com"
              />
            </div>
            <div className="mt-4">
              <Field
                label="Subject"
                testid="contact-input-subject"
                value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })}
                placeholder="What's this about?"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                data-testid="contact-input-message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none rounded-xl px-4 py-3 text-sm transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              data-testid="contact-submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:scale-[1.01] active:scale-95 transition-all soft-shadow"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, href, testid }) => {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      href={href}
      data-testid={testid}
      className={`group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 ${href ? "hover:-translate-y-0.5" : ""} transition-all`}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted-foreground font-medium">{label}</div>
        <div className="text-sm font-semibold text-foreground">{value}</div>
      </div>
    </Comp>
  );
};

const SocialIcon = ({ href, icon, label, testid, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    data-testid={testid}
    className={`w-11 h-11 rounded-full ${color} text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all soft-shadow`}
  >
    {icon}
  </a>
);

const Field = ({ label, value, onChange, type = "text", placeholder, testid }) => (
  <div>
    <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
    <input
      type={type}
      data-testid={testid}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none rounded-xl px-4 h-11 text-sm transition-all"
    />
  </div>
);
