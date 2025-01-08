import { motion } from "framer-motion";
import { CodeBracketIcon, CommandLineIcon, CpuChipIcon, FireIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

type NerdyStatsProps = {
  title: string;
  subtitle: string;
  stats: {
    linesOfCode: {
      title: string;
      value: string;
      description: string;
    };
    coffeeConsumed: {
      title: string;
      value: string;
      description: string;
    };
    bugsSquashed: {
      title: string;
      value: string;
      description: string;
    };
    githubStreak: {
      title: string;
      value: string;
      description: string;
    };
  };
  achievements: {
    title: string;
    list: {
      debugger: {
        title: string;
        description: string;
        level: string;
      };
      nightOwl: {
        title: string;
        description: string;
        level: string;
      };
      polyglot: {
        title: string;
        description: string;
        level: string;
      };
      architect: {
        title: string;
        description: string;
        level: string;
      };
    };
  };
};

export default function NerdyStats({ title, subtitle, stats, achievements }: NerdyStatsProps) {
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentText = "";
    const interval = setInterval(() => {
      if (currentText.length < subtitle.length) {
        currentText = subtitle.slice(0, currentText.length + 1);
        setTypedSubtitle(currentText);
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [subtitle]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Terminal Header */}
      <div className="bg-zinc-900/80 rounded-t-lg p-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-rose-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="ml-4 text-sm text-zinc-400 font-mono">~/nerdy-stats</div>
      </div>

      {/* Terminal Content */}
      <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-b-lg border border-zinc-800">
        <div className="font-mono mb-8">
          <span className="text-emerald-500">$ </span>
          <span className="text-zinc-300">{title}</span>
          <div className="mt-2">
            <span className="text-emerald-500">{">"} </span>
            <span className="text-zinc-400">{typedSubtitle}</span>
            {showCursor && (
              <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse" />
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={CodeBracketIcon}
            title={stats.linesOfCode.title}
            value={stats.linesOfCode.value}
            description={stats.linesOfCode.description}
          />
          <StatCard
            icon={CpuChipIcon}
            title={stats.coffeeConsumed.title}
            value={stats.coffeeConsumed.value}
            description={stats.coffeeConsumed.description}
          />
          <StatCard
            icon={CommandLineIcon}
            title={stats.bugsSquashed.title}
            value={stats.bugsSquashed.value}
            description={stats.bugsSquashed.description}
          />
          <StatCard
            icon={FireIcon}
            title={stats.githubStreak.title}
            value={stats.githubStreak.value}
            description={stats.githubStreak.description}
          />
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-500 mb-6 font-mono">
            {achievements.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(achievements.list).map((achievement, index) => (
              <Achievement
                key={index}
                {...achievement}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value, description }: {
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-emerald-500 translate-x-2 translate-y-2 rounded-lg transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
      <div className="relative bg-zinc-900 p-6 rounded-lg border border-zinc-800">
        <Icon className="w-8 h-8 text-emerald-500 mb-4" />
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <div className="text-3xl font-mono font-bold text-emerald-500 mb-2">
          {value}
        </div>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </motion.div>
  );
}

function Achievement({ title, description, level, delay }: {
  title: string;
  description: string;
  level: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
      <div className="relative bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:border-emerald-500/50 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <span className="text-sm font-mono text-emerald-500">{level}</span>
        </div>
        <p className="text-zinc-400">{description}</p>
        <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${parseInt(level.match(/\d+/)?.[0] || "0")}%` }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3, duration: 0.8 }}
            className="h-full bg-emerald-500"
          />
        </div>
      </div>
    </motion.div>
  );
} 