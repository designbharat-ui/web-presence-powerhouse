import { StatCounter } from "@/components/ui/stat-counter";

const stats = [
  { value: 30, suffix: "+", label: "Expert Mechanics" },
  { value: 6, suffix: " mps", label: "High-Speed Elevators" },
  { value: 21, suffix: "+", label: "Years Experience" },
  { value: 3000, suffix: "+", label: "Units Installed" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-gold">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              className="[&_.font-display]:text-primary-foreground [&_p]:text-primary-foreground/70"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
