import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  text: string;
}

export default function Section({ title, text }: SectionProps) {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-lg leading-relaxed">{text}</p>
    </motion.div>
  );
}
