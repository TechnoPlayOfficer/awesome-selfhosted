import React from "react";
import { motion } from "framer-motion";

export const PlatinumSkeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative overflow-hidden bg-white/5 border border-white/5 ${className}`}>
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ translateX: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      />
    </div>
  );
};
