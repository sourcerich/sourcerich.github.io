"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="flex items-center justify-center h-screen"
    >
      <h1 className="text-6xl font-bold tracking-tight">Richie Patil</h1>
    </motion.div>
  );
};

export default Hero;
