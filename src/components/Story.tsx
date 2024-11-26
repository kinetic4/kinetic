import React, { useRef } from "react";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle";
import RoundedCorner from "./RoundedCorner";
import Button from "./Button";

const Story: React.FC = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const mouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    const scale = 1.05;

    gsap.to(element, {
      duration: 0.4,
      rotateX,
      rotateY,
      scale,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const mouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.4,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: "power1.inOut",
    });
  };

  return (
    <section
      id="story"
      className="min-h-dvh w-screen bg-black text-blue-75 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex size-full flex-col items-center py-10">
        <p className="font-general uppercase text-sm md:text-xs text-center">
          The Multiverse IP World
        </p>

        <div className="relative w-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br/> a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference text-gray relative z-10"
          />

          <div className="story-img-container relative mt-8">
            <div className="story-img-mask overflow-hidden rounded-lg">
              <div className="story-img-content">
                <img
                  src="/img/entrance.webp"
                  alt="Entrance to the hidden realm"
                  ref={frameRef}
                  className="object-cover w-full h-auto transition-transform duration-300"
                  onMouseMove={mouseEnter}
                  onMouseLeave={mouseLeave}
                />
              </div>
            </div>
            <RoundedCorner />
          </div>
        </div>

        <div className="w-full max-w-[28rem] mt-12 md:mt-[-440px]">
          <div className="text-center md:text-left space-y-4">
            <p className="text-violet-50 font-circular-web max-w-prose mx-auto md:mx-0">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <div className="flex justify-center md:justify-center">
              <Button
                id="realm-button"
                title="Discover Prologue"
                containerClass="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;