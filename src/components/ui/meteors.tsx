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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Random horizontal position across the container width
        const leftPosition = Math.random() * 100; // 0-100%
        // Random animation delay and duration
        const animationDelay = Math.random() * 8; // 0-8 seconds
        const animationDuration = 3 + Math.random() * 4; // 3-7 seconds

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "absolute h-1 w-1 rounded-full bg-white/90 shadow-[0_0_8px_2px_rgba(255,255,255,0.3)]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[60px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-white/80 before:to-transparent before:content-['']",
              "animate-meteor-effect",
              className,
            )}
            style={{
              top: "-10px", // Start just above the container
              left: leftPosition + "%",
              animationDelay: animationDelay + "s",
              animationDuration: animationDuration + "s",
            }}
          ></span>
        );
      })}
    </div>
  );
};