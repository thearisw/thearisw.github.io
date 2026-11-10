import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export function Navbar({ dark, onToggleTheme }: { dark: boolean; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const home = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [name, tld] = profile.domain.split(".");
  const solid = !home || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        open ? "border-border bg-background" : solid ? "border-border bg-background/90" : "border-transparent"
      )}
    >
      <div className="container flex h-16 items-center gap-6 md:h-20">
        <Link to="/" className="mr-auto text-lg font-bold tracking-tight">
          {name}
          <span className="text-primary">.{tld}</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
                cn(
                  "relative py-1.5 text-[1.05rem] tracking-wide transition-colors",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-300",
                  isActive
                    ? "text-primary after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100 hover:after:bg-foreground/30"
                )
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={onToggleTheme}
          className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? <Sun className="h-[1.1rem] w-[1.1rem]" /> : <Moon className="h-[1.1rem] w-[1.1rem]" />}
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
        <nav className="container flex flex-col pb-4 md:hidden" aria-label="Mobile">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
                cn("border-t py-3.5 text-lg", isActive ? "font-medium text-primary" : "text-muted-foreground")
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
