import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type FooterProps = {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
};

export default function Footer({ githubUrl, linkedinUrl, email }: FooterProps) {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(60deg,#18181b_12px,transparent_12px)] bg-[length:24px_24px] opacity-[0.15]" />
        <div className="absolute -inset-x-full -top-1/2 h-[200%] w-[200%] bg-gradient-to-b from-transparent via-zinc-900/30 to-zinc-900/50 backdrop-blur-3xl" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="flex justify-center gap-12">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-rose-500 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            <div className="relative bg-zinc-900 p-3">
              <FaGithub className="w-6 h-6" />
            </div>
          </motion.a>
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-teal-500 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            <div className="relative bg-zinc-900 p-3">
              <FaLinkedin className="w-6 h-6" />
            </div>
          </motion.a>
          <motion.a
            href={`mailto:${email}`}
            className="group relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-violet-500 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            <div className="relative bg-zinc-900 p-3">
              <FaEnvelope className="w-6 h-6" />
            </div>
          </motion.a>
        </div>
      </div>
    </footer>
  );
} 