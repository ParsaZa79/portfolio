import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  color: "rose" | "violet" | "teal" | "emerald" | "yellow" | "orange";
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  description?: string;
};

export default function SectionHeader({ title, color, Icon, description }: SectionHeaderProps) {
  const colors = {
    rose: "bg-rose-500 text-rose-500",
    violet: "bg-violet-500 text-violet-500",
    teal: "bg-teal-500 text-teal-500",
    emerald: "bg-emerald-500 text-emerald-500",
    yellow: "bg-yellow-500 text-yellow-500",
    orange: "bg-orange-500 text-orange-500",
  };

  const baseColor = colors[color].split(" ")[0];
  const textColor = colors[color].split(" ")[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col items-center mb-12 md:mb-24 px-4"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: color === "violet" ? 5 : -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className={`relative z-10 ${baseColor} p-4 sm:p-6 md:p-8 transform ${
            color === "violet" ? "rotate-3" : "-rotate-3"
          } hover:rotate-0 transition-transform duration-300`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative flex items-center justify-center">
            <Icon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white" />
          </div>
        </motion.div>
        <div className={`absolute -inset-2 sm:-inset-3 md:-inset-4 ${baseColor}/20 -z-10 ${
          color === "violet" ? "-skew-y-6" : "skew-y-6"
        }`} />
        <div className={`absolute -inset-1 sm:-inset-2 ${baseColor}/10 -z-20 ${
          color === "violet" ? "skew-y-3" : "-skew-y-3"
        }`} />
      </div>
      <div className="relative mt-8 md:mt-12 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase mb-4 tracking-tight">
          <span className={textColor + " inline-block"}>
            {title}
          </span>
        </h2>
        <div className={`h-1 sm:h-2 w-16 sm:w-24 md:w-32 ${baseColor} mx-auto`} />
        {description && (
          <p className="section-description text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium mt-4 sm:mt-6 uppercase tracking-wide px-4">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}