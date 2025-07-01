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
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Calculate position to evenly distribute meteors across container width
        const leftPosition = Math.random() * 100; // Random position across width
        const topPosition = Math.random() * 100; // Random starting height

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "absolute h-1 w-1 rounded-full bg-blue-400 dark:bg-blue-300 shadow-[0_0_6px_2px_rgba(59,130,246,0.5)]",
              "before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-blue-400 before:to-transparent before:content-['']",
              "animate-meteor-effect",
              className,
            )}
            style={{
              top: `${topPosition}%`,
              left: `${leftPosition}%`,
              animationDelay: Math.random() * 5 + "s", // Random delay between 0-5s
              animationDuration: Math.floor(Math.random() * (8 - 4) + 4) + "s", // Duration between 4-8s
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};