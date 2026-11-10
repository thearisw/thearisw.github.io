import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { education, skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section className="container pb-20 pt-4 md:pb-28">
      <SectionHeading index="Skills & education" title="What I work with" />
      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.08}>
            <div className="h-full rounded-2xl border bg-card p-6">
              <h3 className="mb-4 font-semibold">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <Badge key={it} variant="outline" className="px-3 py-1 text-sm">
                    {it}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-5">
        <div className="flex flex-col gap-5 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold">{education.school}</h3>
              <span className="font-mono text-xs text-muted-foreground">{education.date}</span>
            </div>
            <p className="text-sm">
              {education.degree} · <span className="text-primary">{education.detail}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Coursework: {education.coursework.join(" · ")}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
