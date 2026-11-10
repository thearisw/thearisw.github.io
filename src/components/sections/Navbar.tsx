import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, FileText } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ dark, onToggleTheme }: { dark: boolean; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [name, tld] = profile.domain.split(".");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b bg-background/75 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center gap-3">
        <a href="#top" className="mr-auto text-lg font-bold tracking-tight">
          {name}
          <span className="text-primary">.{tld}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <ButtonLink href={profile.resume} target="_blank" rel="noopener" variant="primary" size="sm" className="hidden md:inline-flex">
          <FileText /> Resume
        </ButtonLink>
        <button
          onClick={onToggleTheme}
          className="grid h-9 w-9 place-items-center rounded-full border bg-background/60 transition-colors hover:bg-secondary"
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-full border bg-background/60 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav className="container flex flex-col gap-1 pb-5 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium hover:bg-secondary">
              {l.label}
            </a>
          ))}
          <ButtonLink href={profile.resume} target="_blank" rel="noopener" variant="primary" className="mt-2">
            <FileText /> Resume
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
