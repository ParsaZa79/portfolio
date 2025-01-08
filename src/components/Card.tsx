import { motion } from "framer-motion";
import { HeroIcon } from "@heroicons/react/24/outline";

type CardProps = {
  color: "rose" | "violet" | "teal" | "emerald";
  title?: string;
  description?: string;
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  items: { text: string }[];
  company?: string;
  location?: string;
  period?: string;
  initialAnimation?: {
    x?: number;
    y?: number;
  };
};

export default function Card({
  color,
  title,
  description,
  icon: Icon,
  items,
  company,
  location,
  period,
  initialAnimation = { y: 20 }
}: CardProps) {
  const colors = {
    rose: "rose",
    violet: "violet",
    teal: "teal",
    emerald: "emerald",
  };

  const baseColor = colors[color];

  return (
    <motion.div
      initial={{ opacity: 0, ...initialAnimation }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className={`relative bg-zinc-900/50 backdrop-blur-sm p-8 transform transition-all duration-500 ease-out border border-zinc-800/50 hover:border-${baseColor}-500/20 hover:bg-${baseColor}-500/[0.02] h-full flex flex-col`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-${baseColor}-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className={`absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-${baseColor}-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative flex flex-col flex-grow">
          {Icon && title && (
            <div className="flex items-center gap-6 mb-6">
              <Icon className={`w-16 h-16 text-${baseColor}-500/80 transform transition duration-500 ease-out group-hover:text-${baseColor}-400 group-hover:scale-105 flex-shrink-0`} />
              <h2 className="text-3xl font-bold text-white/90 transition-colors duration-500">
                {title}
              </h2>
            </div>
          )}
          
          {!Icon && title && (
            <h3 className="text-2xl font-bold mb-3 text-white/90 transition-colors duration-500">
              {title}
            </h3>
          )}

          {(company || location || period) && (
            <div className="space-y-1 mb-6">
              {company && (
                <p className="text-lg text-zinc-300 transition-colors duration-500 group-hover:text-white/90">
                  {company}
                </p>
              )}
              {location && (
                <p className="text-zinc-400 transition-colors duration-500 group-hover:text-zinc-300">
                  {location}
                </p>
              )}
              {period && (
                <p className="text-sm text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                  {period}
                </p>
              )}
            </div>
          )}

          {description && (
            <p className="text-zinc-400 mb-8 text-lg transition-colors duration-500 group-hover:text-zinc-300">
              {description}
            </p>
          )}

          <ul className={`space-y-${Icon ? "4" : "3"} mt-auto`}>
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="flex items-start gap-3 group/item"
              >
                <span className={`w-1.5 h-1.5 rounded-sm bg-${baseColor}-500/70 ${
                  !Icon && "mt-2"
                } flex-shrink-0 transition-all duration-500 group-hover:bg-${baseColor}-400/70 group-hover/item:scale-110`} />
                <span className="text-zinc-300 transition-colors duration-500 group-hover:text-white/90">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
} 