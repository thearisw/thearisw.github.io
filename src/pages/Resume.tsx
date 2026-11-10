import { Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export default function Resume() {
  const pdf = `/${profile.resume}`;
  return (
    <section className="container pb-20 pt-32 md:pt-40">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-sm text-primary">Resume</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">My resume</h1>
        </div>
        <ButtonLink href={pdf} download="Aris_Wong_Resume.pdf" variant="primary" size="lg">
          <Download /> Download PDF
        </ButtonLink>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
          {/* Browsers render the PDF inline; phones that can't show it get the fallback link. */}
          <object data={`${pdf}#view=FitH`} type="application/pdf" className="h-[80vh] min-h-[560px] w-full" aria-label="Resume preview">
            <div className="grid min-h-[300px] place-items-center p-8 text-center">
              <div>
                <p className="mb-4 text-muted-foreground">Your browser can't show the PDF preview here.</p>
                <ButtonLink href={pdf} target="_blank" rel="noopener" variant="primary">
                  Open resume
                </ButtonLink>
              </div>
            </div>
          </object>
        </div>
      </Reveal>
    </section>
  );
}
