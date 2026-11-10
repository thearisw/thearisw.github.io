import { Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section className="container pb-20 pt-32 md:pb-28 md:pt-40">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border bg-zinc-950 px-6 py-16 text-center text-white md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(ellipse_at_50%_120%,rgba(96,165,250,0.55),rgba(129,140,248,0.25)_45%,transparent_70%)]" />
          <div className="relative">
            <p className="font-mono text-sm text-blue-300">Contact</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Let's build something.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
              I'm looking for software engineering internships and co-op roles. If you have a role, a question, or just
              want to talk robotics or games, my inbox is open.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href={`mailto:${profile.email}`} size="lg" className="bg-white text-zinc-950">
                <Mail /> Say hello
              </ButtonLink>
              <ButtonLink href={profile.github} target="_blank" rel="noopener" size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                <GithubIcon /> GitHub
              </ButtonLink>
              {profile.linkedin && (
                <ButtonLink href={profile.linkedin} target="_blank" rel="noopener" size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <LinkedinIcon /> LinkedIn
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
