import { SectionHeader } from "@/components/ui/section-header";

const clients = [
  "OTIS", "KONE", "Schindler", "ThyssenKrupp", "Mitsubishi", "Hitachi",
  "M3M Group", "ACE Group", "Signature Tower", "Amrapali",
];

export function ClientsMarquee() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mb-12">
        <SectionHeader
          eyebrow="Trusted Partners"
          title="Brands That Trust Us"
          description="Working with leading elevator manufacturers and real estate developers."
        />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 mx-8 px-12 py-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
            >
              <span className="font-display text-2xl text-muted-foreground hover:text-foreground transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
