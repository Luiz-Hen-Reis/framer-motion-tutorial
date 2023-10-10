"use client";

import { motion } from "framer-motion";

export default function Home() {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };
  return (
    <div className="w-screen h-screen bg-slate-600/70 flex justify-center items-center overflow-hidden">
      <motion.div
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.2 }}
        transition={{ ease: "easeIn", duration: 2 }}
        // animate={{ x: 100 }}
        // drag="x"
        // dragConstraints={{ left: -100, right: 100 }}
        className="w-52 h-52 bg-pink-600/50 flex justify-center items-center"
      >
        Hello motherfuckers
      </motion.div>

      <motion.div
        className="w-52 h-52 bg-red-950/40"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}
