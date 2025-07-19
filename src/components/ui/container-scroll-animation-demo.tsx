"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              See It in Action <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll to see the demo
              </span>
            </h1>
          </>
        }
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
        ></iframe>
      </ContainerScroll>
    </div>
  );
}