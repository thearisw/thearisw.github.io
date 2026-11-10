import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ButtonLink } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <AuroraBackground id="top" className="h-auto min-h-[100svh] px-4 pb-24 pt-28 dark:bg-zinc-950">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex max-w-4xl flex-col items-center gap-6 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {profile.lookingFor}
        </span>

        <h1 className="text-5xl font-bold tracking-tighter text-zinc-950 dark:text-white sm:text-6xl md:text-8xl">
          {profile.name}
        </h1>
        <p className="max-w-2xl text-xl font-light text-zinc-700 dark:text-neutral-200 md:text-3xl">{profile.tagline}</p>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400 md:text-lg">{profile.intro}</p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="#projects" size="lg">
            See my work <ArrowRight />
          </ButtonLink>
          <ButtonLink href={profile.resume} target="_blank" rel="noopener" variant="outline" size="lg" className="text-zinc-900 dark:text-white">
            <Download /> Resume
          </ButtonLink>
        </div>

        <div className="flex items-center gap-5 text-zinc-600 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1.5 text-sm">
            <MapPin className="h-4 w-4" /> {profile.location}
          </span>
          <span className="h-4 w-px bg-zinc-400/50" />
          <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="transition hover:-translate-y-0.5 hover:text-zinc-950 dark:hover:text-white">
            <GithubIcon className="h-5 w-5" />
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="transition hover:-translate-y-0.5 hover:text-zinc-950 dark:hover:text-white">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          )}
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:-translate-y-0.5 hover:text-zinc-950 dark:hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </motion.div>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 z-10 text-zinc-500 dark:text-zinc-400">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </AuroraBackground>
  );
}
