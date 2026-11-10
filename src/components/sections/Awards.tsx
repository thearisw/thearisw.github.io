import { Reveal } from "@/components/Reveal";
import { awards } from "@/data/portfolio";

export function Awards() {
  return (
    <section className="container py-20 md:py-28">
      <Reveal className="mb-10 text-center">
        <p className="font-mono text-sm text-primary">Awards</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Robotics competition highlights</h2>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-3">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <div className="flex h-full flex-col items-center rounded-2xl border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <a.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
