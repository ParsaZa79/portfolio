import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TranslationType } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState, useCallback, useRef } from "react";

type HeroSectionProps = {
  t: TranslationType;
  onLanguageChange: (lang: 'en' | 'fa') => void;
};

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
};

export default function HeroSection({ t, onLanguageChange }: HeroSectionProps) {
  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const [showNameCursor, setShowNameCursor] = useState(true);
  const [showRoleCursor, setShowRoleCursor] = useState(false);
  const [startRoleTyping, setStartRoleTyping] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseSpeedX = useMotionValue(0);
  const mouseSpeedY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseSpeedX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseSpeedY, { damping: 50, stiffness: 400 });
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const rotateX = useTransform(smoothMouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-100, 100], [-5, 5]);

  const initParticles = useCallback(() => {
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    initParticles();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgba(244, 63, 94, 0.15)';
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX + (mouseSpeedX.get() * 0.05);
        particle.y += particle.speedY + (mouseSpeedY.get() * 0.05);

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particle.x - particlesRef.current[j].x;
          const dy = particle.y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(244, 63, 94, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Calculate mouse speed
    const speedX = e.clientX - lastMousePos.x;
    const speedY = e.clientY - lastMousePos.y;
    
    mouseSpeedX.set(speedX);
    mouseSpeedY.set(speedY);
    setLastMousePos({ x: e.clientX, y: e.clientY });
    setMousePosition({ x, y });
  }, [lastMousePos]);

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
    <div 
      className="relative min-h-screen border-b border-zinc-800 flex flex-col overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          rotateX,
          rotateY,
          transformPerspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      />

      {/* Interactive Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(244, 63, 94, 0.15), transparent 35%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(63, 63, 244, 0.1), transparent 25%)
          `,
          filter: "blur(40px)",
        }}
      />

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("/noise.png")',
          backgroundRepeat: 'repeat',
          transform: `translate(${(mousePosition.x - 50) * -0.02}px, ${(mousePosition.y - 50) * -0.02}px)`,
        }}
      />

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