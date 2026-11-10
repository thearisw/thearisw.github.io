import { useEffect, useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/data/portfolio";

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage blocked: theme just won't be remembered */
    }
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <Hero />
      <div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
        Designed &amp; built by {profile.name} · {new Date().getFullYear()}
      </footer>
    </>
  );
}
