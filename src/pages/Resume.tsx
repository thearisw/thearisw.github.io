import { Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { profile } from "@/data/portfolio";

export default function Resume() {
  return (
    <>
      <section className="container pt-32 md:pt-40">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-sm text-primary">Resume</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">My resume</h1>
          </div>
          <ButtonLink href={profile.resume} target="_blank" rel="noopener" variant="primary" size="lg" download>
            <Download /> Download PDF
          </ButtonLink>
        </Reveal>
      </section>
      <Experience />
      <Skills />
    </>
  );
}
