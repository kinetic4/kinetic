"use client";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,

} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimatedTitle from "../AnimatedTitle";
import Button from "../Button";
import { cn } from "../../lib/util";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
  }, [ref, height]);

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
      <div className="flex gap-10 mt-32">
          <div ref={ref} className="relative w-1/2">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-black/20" />
            <AnimatePresence>
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "mb-32 relative",
                    activeSection === index ? "opacity-100" : "opacity-40"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeSection === index ? 1 : 0.4, 
                    y: 0 
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="flex items-start">
                    <div className="flex items-center w-32">
                      <span className="font-mono text-sm text-black/60 w-8">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="h-[1px] flex-1 bg-black/60" />
                    </div>
                    <div className="flex-1 pl-8">
                      <h3 className="text-2xl md:text-3xl font-robert-medium text-black mb-4">
                        {item.title}
                      </h3>
                      <div className="text-black/80 max-w-xl font-robert-regular text-lg">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="w-1/2 top-0 h-screen flex items-center justify-center">
          <DotLottieReact src="https://lottie.host/6db46fb1-d839-4aa4-b79d-b59f365e5303/nL7Zy2elNw.lottie" loop autoplay className="w-[70%] h-[40%]"/>
          </div>
          </div>
    </motion.div>
  );
};