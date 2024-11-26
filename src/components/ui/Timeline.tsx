"use client";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimatedTitle from "../AnimatedTitle";
import Button from "../Button";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  backgroundColor?: string; // Optional background color for each section
}

export const TimelineUi = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create background colors for each section
  const backgroundColors = [
    '#000000', // Default start color
    ...data.map(item => item.backgroundColor || '#EDFC66') // Use provided or default color
  ];

  // Calculate section breakpoints
  const getSectionBreakpoints = () => {
    const sectionCount = data.length + 1; // +1 for initial state
    return Array.from({ length: sectionCount }, (_, i) => i / (sectionCount - 1));
  };

  // Transform background based on active section
  const backgroundTransform = useTransform(
    scrollYProgress,
    getSectionBreakpoints(),
    backgroundColors
  );

  // Track active section
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const sectionBreakpoints = getSectionBreakpoints();
      const newActiveSection = sectionBreakpoints.findIndex(
        (breakpoint, index) => 
          latest >= breakpoint && 
          (index === sectionBreakpoints.length - 1 || latest < sectionBreakpoints[index + 1])
      );
      
      if (newActiveSection !== -1) {
        setActiveSection(newActiveSection);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, data]);

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div
      style={{ 
        backgroundColor: backgroundTransform,
        transition: 'background-color 0.3s ease'
      }}
      className="w-full size-full md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <AnimatedTitle 
          title="The univ<b>e</b>rse powered by ze<b>n</b>t" 
          sectionId="#timeline" 
          containerClass="mt-[50rem] !text-black w-[70%] !mx-auto flex justify-center items-center md:justify-start mb-10"
        />
        <Button 
          id='vault-button' 
          title="Enter vault" 
          containerClass="mt-4 !bg-black !text-white justify-start flex !mx-auto items-center"
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div 
                  className={`h-4 w-4 rounded-full ${
                    activeSection === index + 1 
                      ? 'bg-blue-75' 
                      : 'bg-neutral-200 dark:bg-neutral-800'
                  } border border-black dark:border-neutral-700 p-2`} 
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-robert-medium text-black">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-sm mb-4 text-left font-bold text-black">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-white via-slate-800 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};