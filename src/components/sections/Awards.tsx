import { Reveal } from "@/components/Reveal";
import { awards } from "@/data/portfolio";
import { cn } from "@/lib/utils";

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
            <div
              className={cn(
                "group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
                a.image && "text-white",
              )}
            >
              {a.image && (
                <>
                  <img
                    src={`/${a.image}`}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark overlay keeps the text readable in both themes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
                </>
              )}
              <div
                className={cn(
                  "relative grid h-14 w-14 place-items-center rounded-2xl",
                  a.image ? "bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm" : "bg-accent text-accent-foreground",
                )}
              >
                <a.icon className="h-7 w-7" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold">{a.title}</h3>
              <p className={cn("relative mt-1 text-sm", a.image ? "text-white/80" : "text-muted-foreground")}>{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
