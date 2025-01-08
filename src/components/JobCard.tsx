import { motion } from 'framer-motion';

type JobCardProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
};

export function JobCard({ title, company, location, period, responsibilities }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-gray-400 mb-4">
        <p>{company}</p>
        <p>{location}</p>
        <p className="text-sm">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {responsibilities.map((responsibility, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="text-gray-300"
          >
            {responsibility}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
} 