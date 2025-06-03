import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="w-[80%] mx-auto bg-muted/50 rounded-lg py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Still storing your files in random folders called “Final_v3_REAL”? 🫣
        </h2>

        {/* Subheading */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          Let’s stop the chaos. Get organized, stay synced, and access your stuff from anywhere — without the existential dread.
        </p>

        {/* CTA Button */}
        <Link href="/dashboard">
          <Button size="lg" className="text-base px-6 py-4">
            Enter Your Digital Sanctuary
          </Button>
        </Link>
      </div>
      
    </section>
  );
}
