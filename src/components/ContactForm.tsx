import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

type ContactFormProps = {
  title: string;
  subtitle: string;
  form: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
    submit: string;
  };
  success: string;
  error: string;
};

export default function ContactForm({ title, subtitle, form, success, error }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus(Math.random() > 0.5 ? 'success' : 'error');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >

      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-zinc-900/50 backdrop-blur-sm p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Neo-brutalist decorative elements */}
        <div className="absolute -inset-0.5 bg-orange-500" style={{ zIndex: -2 }} />
        <div className="absolute inset-0 bg-zinc-900" style={{ zIndex: -1 }} />
        <div className="absolute -right-3 -top-3 w-24 h-24 bg-orange-500 -rotate-12" style={{ zIndex: -3 }} />
        <div className="absolute -left-3 -bottom-3 w-24 h-24 bg-orange-500 rotate-12" style={{ zIndex: -3 }} />
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">{form.name.label}</label>
            <input
              type="text"
              className="w-full bg-zinc-800 border-2 border-orange-500 px-4 py-3 rounded-none focus:outline-none focus:border-orange-400 transition-colors placeholder:text-zinc-500"
              placeholder={form.name.placeholder}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">{form.email.label}</label>
            <input
              type="email"
              className="w-full bg-zinc-800 border-2 border-orange-500 px-4 py-3 rounded-none focus:outline-none focus:border-orange-400 transition-colors placeholder:text-zinc-500"
              placeholder={form.email.placeholder}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">{form.message.label}</label>
            <textarea
              className="w-full bg-zinc-800 border-2 border-orange-500 px-4 py-3 rounded-none focus:outline-none focus:border-orange-400 transition-colors min-h-[150px] placeholder:text-zinc-500"
              placeholder={form.message.placeholder}
              required
            />
          </div>

          <div>
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="relative w-full group bg-orange-500 text-black px-6 py-3 text-lg font-black uppercase tracking-wider hover:-translate-x-1 hover:-translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-orange-300 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              {status === 'loading' ? (
                <span className="inline-block animate-pulse">Loading...</span>
              ) : (
                form.submit
              )}
            </motion.button>
          </div>
        </div>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 -bottom-16 text-center text-orange-500 font-bold"
          >
            {success}
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 -bottom-16 text-center text-rose-500 font-bold"
          >
            {error}
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
} 