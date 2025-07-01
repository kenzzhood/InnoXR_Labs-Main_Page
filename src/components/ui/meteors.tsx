"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (100 / meteorCount); // Spread across 100% width

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[215deg] rounded-[9999px] bg-white/90 shadow-[0_0_8px_2px_rgba(255,255,255,0.3)]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[60px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-white/80 before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-20px", // Start above the container
              left: position + "%",
              animationDelay: Math.random() * 8 + "s", // Random delay between 0-8s
              animationDuration: Math.floor(Math.random() * (7 - 3) + 3) + "s", // Duration between 3-7s
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};