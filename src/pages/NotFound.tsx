import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container grid min-h-[70vh] place-items-center pt-24 text-center">
      <div>
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-3 text-muted-foreground">That page doesn't exist. Try one of the tabs up top.</p>
        <Link to="/" className={buttonVariants({ className: "mt-8" })}>
          Back home
        </Link>
      </div>
    </section>
  );
}
