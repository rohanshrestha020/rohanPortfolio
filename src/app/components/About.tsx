import { useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export function About() {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Magnetic values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for magnetic effect - more floaty and responsive
  const springX = useSpring(x, { stiffness: 120, damping: 15 });
  const springY = useSpring(y, { stiffness: 120, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center (scaled for stronger stickiness)
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.65); // Stronger stickiness (65% follow)
    y.set(distanceY * 0.65);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="bg-white py-12 md:py-20 lg:py-32 px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#1c1d20] text-2xl md:text-3xl lg:text-[40px] leading-[1.35] tracking-wide">
              Helping brands to stand out in the digital era.<br className="hidden md:block" />
              Together we will set the new status quo. No<br className="hidden md:block" />
              nonsense, always on the cutting edge.
            </h2>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-start md:items-end text-left sm:text-right gap-12">
            <p className="font-['Inter:Medium',sans-serif] text-[#1c1d20] text-base lg:text-lg leading-[1.8] md:text-right">
              The combination of my passion<br className="hidden md:block" />
              for design, code & interaction<br className="hidden md:block" />
              positions me in a unique place in<br className="hidden md:block" />
              the web design world.
            </p>

            {/* About Me Button with Chase Liquid Hover */}
            <motion.button 
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              className="relative bg-[#1c1d20] border-none rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] overflow-hidden group flex items-center justify-center cursor-pointer shadow-lg"
            >
              {/* Liquid Background Layer - Upward Flow Chase (Blue on Black) */}
              <motion.div
                animate={{ 
                  y: isHovered ? "0%" : (isHovered === false ? "-100%" : "100%"),
                  borderRadius: isHovered ? "0%" : "50% 50% 0 0" 
                }}
                initial={{ y: "100%" }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-[#4763e4] z-0"
              />
              
              <span className="relative z-10 font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-base md:text-lg text-white transition-colors duration-400 pointer-events-none">
                About me
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
