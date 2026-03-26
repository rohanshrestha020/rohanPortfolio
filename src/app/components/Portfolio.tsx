import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-300, 100]);


  const portfolioItems = Array(8).fill({
    image: "https://images.unsplash.com/photo-1746003625471-8785a7d19d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwZXJmb3JtYW5jZSUyMHRyYWluaW5nfGVufDF8fHx8MTc3NDQxMzc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Portfolio item"
  });

  return (
    <section ref={container} className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        {/* First row */}
        <motion.div
          style={{ x: x1 }}
          className="flex gap-6 md:gap-8 lg:gap-12 mb-6 md:mb-8 lg:mb-12 whitespace-nowrap"
        >
          {portfolioItems.slice(0, 4).map((item, index) => (
            <div key={index} className="bg-[#d6d8dc] p-6 md:p-8 lg:p-9 rounded-lg hover:scale-105 transition-transform cursor-pointer group min-w-[300px] md:min-w-[400px] lg:min-w-[500px]">
              <div className="aspect-[4/3] overflow-hidden rounded">
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Second row */}
        <motion.div
          style={{ x: x2 }}
          className="flex gap-6 md:gap-8 lg:gap-12 whitespace-nowrap"
        >
          {portfolioItems.slice(4, 8).map((item, index) => (
            <div key={index} className="bg-[#d6d8dc] p-6 md:p-8 lg:p-9 rounded-lg hover:scale-105 transition-transform cursor-pointer group min-w-[300px] md:min-w-[400px] lg:min-w-[500px]">
              <div className="aspect-[4/3] overflow-hidden rounded">
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>


    </section>
  );
}
