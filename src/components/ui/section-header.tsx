import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      {eyebrow && (
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
