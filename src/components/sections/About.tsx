import { Reveal, SectionHeading } from "@/components/Reveal";
import { about, highlights, profile } from "@/data/portfolio";

export function About() {
  const initials = profile.name.split(" ").map((p) => p[0]).join("");
  return (
    <section className="container pb-20 pt-32 md:pb-28 md:pt-40">
      <SectionHeading index="About" title="A bit about me" />
      <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-xs">
          {/* EDIT: to use a photo, put it in /public (e.g. headshot.jpg) and replace this block with:
              <img src="headshot.jpg" alt="Aris Wong" className="aspect-square w-full rounded-3xl object-cover" /> */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-px shadow-2xl shadow-indigo-500/20">
            <div className="grid h-full w-full place-items-center rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-blue-500/90 via-indigo-500/90 to-violet-500/90">
              <span className="text-7xl font-bold tracking-tighter text-white/95">{initials}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h.value} delay={i * 0.08}>
            <div className="group flex h-full items-center gap-4 rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <h.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold leading-tight">{h.value}</p>
                <p className="text-sm text-muted-foreground">{h.label}</p>
                <p className="font-mono text-xs text-muted-foreground/80">{h.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
