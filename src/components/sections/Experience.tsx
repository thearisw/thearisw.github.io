import { Reveal, SectionHeading } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="container py-20 md:py-28">
      <SectionHeading index="02 — Experience" title="Where I've worked and led" />
      <ol className="relative space-y-10 border-l border-border pl-8 md:pl-10">
        {experience.map((e, i) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[3.05rem] top-0 grid h-10 w-10 place-items-center rounded-full border bg-background text-primary shadow-sm md:-left-[3.55rem]">
              <e.icon className="h-[1.1rem] w-[1.1rem]" />
            </span>
            <Reveal delay={i * 0.05}>
              <div className="rounded-2xl border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.date}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-primary">{e.org}</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60">
                      {p}
                    </li>
                  ))}
                </ul>
                {e.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
