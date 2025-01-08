import { motion } from "framer-motion";
import { TranslationType } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";

type HeroSectionProps = {
  t: TranslationType;
  onLanguageChange: (lang: 'en' | 'fa') => void;
};

export default function HeroSection({ t, onLanguageChange }: HeroSectionProps) {
  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const [showNameCursor, setShowNameCursor] = useState(true);
  const [showRoleCursor, setShowRoleCursor] = useState(false);
  const [startRoleTyping, setStartRoleTyping] = useState(false);

  useEffect(() => {
    // Type name first
    let currentName = "";
    const nameInterval = setInterval(() => {
      if (currentName.length < t.name.length) {
        currentName = t.name.slice(0, currentName.length + 1);
        setTypedName(currentName);
      } else {
        clearInterval(nameInterval);
        setShowNameCursor(false);
        setShowRoleCursor(true);
        setStartRoleTyping(true);
      }
    }, 100);

    return () => clearInterval(nameInterval);
  }, [t.name]);

  useEffect(() => {
    if (startRoleTyping) {
      let currentRole = "";
      const roleInterval = setInterval(() => {
        if (currentRole.length < t.role.length) {
          currentRole = t.role.slice(0, currentRole.length + 1);
          setTypedRole(currentRole);
        } else {
          clearInterval(roleInterval);
          setShowRoleCursor(false);
        }
      }, 50);

      return () => clearInterval(roleInterval);
    }
  }, [startRoleTyping, t.role]);

  return (
    <div className="relative min-h-screen border-b border-zinc-800 flex flex-col">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Language Switcher */}
      <LanguageSwitcher switchText={t.ui.switchLanguage} onChange={onLanguageChange} />

      {/* Main Hero Content */}
      <div className="flex-grow container mx-auto px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative inline-block"
          >
            <div className="relative z-10">
              <div className="font-mono mb-4 text-rose-500/80">
                <span>{">"} </span>
                <span className="text-zinc-400">init</span>
                <span className="text-white/80">.name</span>
                <span className="text-rose-500/80">()</span>
              </div>
              <h1 className="text-8xl md:text-[12rem] font-bold leading-none tracking-tighter relative">
                {typedName}
                {showNameCursor && (
                  <span className="absolute inline-block w-[6px] h-[80%] bg-rose-500 ml-2 animate-pulse" />
                )}
              </h1>
              <div className="mt-4 ml-2 flex gap-4 flex-wrap">
                {Object.entries(t.badges).map(([key, value], index) => (
                  <motion.span
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="inline-block bg-white text-black px-4 py-1 text-sm relative group hover:-translate-x-1 hover:-translate-y-1 transition-transform"
                  >
                    <div className="absolute inset-0 bg-rose-500 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                    {value}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mt-12 ml-2"
          >
            <div className="font-mono mb-4 text-rose-500/80">
              <span>{">"} </span>
              <span className="text-zinc-400">get</span>
              <span className="text-white/80">.role</span>
              <span className="text-rose-500/80">()</span>
            </div>
            <p className="text-2xl md:text-4xl text-zinc-400 max-w-2xl relative">
              {typedRole}
              {showRoleCursor && (
                <span className="absolute inline-block w-[4px] h-[80%] bg-rose-500 ml-1 animate-pulse" />
              )}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-zinc-500 text-lg no-rtl"
          >
            {t.ui.scrollToExplore}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 