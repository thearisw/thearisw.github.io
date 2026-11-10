import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { profile } from "@/data/portfolio";

export function Layout() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const { pathname } = useLocation();
  const home = pathname === "/";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage blocked: theme just won't be remembered */
    }
  }, [dark]);

  // New page → start at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex-1"
      >
        <Outlet />
      </motion.div>
      {!home && (
        <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
          Designed &amp; built by {profile.name} · {new Date().getFullYear()}
        </footer>
      )}
    </div>
  );
}
