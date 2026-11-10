import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { profile, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section className="container pb-20 pt-32 md:pb-28 md:pt-40">
      <SectionHeading
        index="Projects"
        title="Things I've built"
        subtitle="From chaos-theory cryptography to AI film pipelines and games. More on my GitHub."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div className={cn("relative h-32 overflow-hidden bg-gradient-to-br", p.featured && "h-40", p.gradient)}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:24px_24px]" />
                <p.icon className="absolute bottom-4 left-5 h-10 w-10 text-white drop-shadow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                <span className="absolute right-4 top-4 rounded-full bg-black/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-white backdrop-blur">
                  {p.kind}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <div className="flex gap-2 text-muted-foreground">
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noopener" aria-label={`${p.title} source code`} className="hover:text-foreground">
                        <GithubIcon className="h-5 w-5" />
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener" aria-label={`${p.title} live demo`} className="hover:text-foreground">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink href={profile.github} target="_blank" rel="noopener" variant="outline">
          <GithubIcon /> More on GitHub <ArrowUpRight />
        </ButtonLink>
      </div>
    </section>
  );
}
