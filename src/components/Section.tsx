import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  color: "rose" | "violet" | "teal" | "emerald" | "yellow" | "orange";
  pattern?: "grid" | "diagonal" | "dots";
};

export default function Section({ children, color, pattern = "grid" }: SectionProps) {
  const patterns = {
    grid: "bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50",
    diagonal: "bg-[linear-gradient(45deg,#18181b_25%,transparent_25%,transparent_75%,#18181b_75%)] bg-[length:60px_60px] opacity-[0.15]",
    dots: "bg-[linear-gradient(60deg,#18181b_12px,transparent_12px)] bg-[length:24px_24px] opacity-[0.15]",
  };

  const colors = {
    rose: "rose",
    violet: "violet",
    teal: "teal",
    emerald: "emerald",
    yellow: "yellow",
    orange: "orange",
  };

  const baseColor = colors[color];

  return (
    <section className="relative py-32 border-b border-zinc-800 overflow-hidden">
      {/* Neo-brutalist background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${patterns[pattern]}`} />
        <div className={`absolute top-40 left-1/3 w-72 h-72 bg-${baseColor}-500/10 -rotate-6 blur-3xl`} />
        <div className={`absolute bottom-40 right-1/3 w-80 h-80 bg-${baseColor}-500/10 rotate-12 blur-3xl`} />
        <div className={`absolute top-1/4 right-1/4 w-56 h-56 bg-${baseColor}-500/20 -rotate-12`} />
        <div className={`absolute bottom-1/4 left-1/4 w-64 h-64 bg-${baseColor}-500/10 rotate-45`} />
      </div>
      <div className="relative container mx-auto px-4">
        {children}
      </div>
    </section>
  );
} 