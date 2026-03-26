import { useState } from "react";
import { motion } from "motion/react";

export function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const projects = [
    {
      name: "TWICE",
      category: "Interaction & Development",
      bgImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
      smallImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "The Damai",
      category: "Design & Development",
      bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      smallImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "FABRIC™",
      category: "Design & Development",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      smallImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sangatha.io",
      category: "Product Design",
      bgImage: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
      smallImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=200&auto=format&fit=crop"
    },
  ];

  return (
    <section id="work" className="bg-white py-20 px-8 md:px-16 lg:px-32 xl:px-[250px] 2xl:px-[350px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-4">
          <p className="text-[#999d9e] text-[11px] md:text-xs font-['Inter:Medium',sans-serif] uppercase tracking-[0.15em]">
            Recent work
          </p>
        </div>
        <div className="space-y-0 relative">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <div className="border-t-[1px] border-[#D7D7D8]"></div>

              <div className="py-8 md:py-12 lg:py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 cursor-pointer relative z-0">
                <h3 className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#1c1d20] text-4xl md:text-6xl lg:text-[72px] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-4">
                  {project.name}
                </h3>
                <span className="font-['Inter:Regular',sans-serif] text-[#1c1d20] text-sm md:text-base opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  {project.category}
                </span>
              </div>

              {/* Hover UI Overlay */}
              <div className="absolute left-[5%] lg:left-[15%] top-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] opacity-0 group-hover:opacity-100 scale-[0.9] group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none z-10 flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <img src={project.bgImage} className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" alt={project.name} />

                {/* Beige Inner Box */}
                <div className="relative w-[75%] h-[60%] bg-[#e3e1db] shadow-xl flex items-center justify-center overflow-hidden">
                  {/* Small Image Below Circle */}
                  <img src={project.smallImage} className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[50px] h-[65px] md:w-[60px] md:h-[75px] object-cover" alt="Detail" />

                  {/* Blue View Circle */}
                  <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] md:w-[90px] md:h-[90px] bg-[#4763e4] rounded-full flex items-center justify-center text-white font-['Inter:Medium',sans-serif] text-sm tracking-wide shadow-md z-10">
                    View
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t-[1px] border-[#D7D7D8]"></div>
        </div>

        {/* More work button with 'Chase' Upward Hover Animation */}
        <div className="flex justify-center mt-12 md:mt-20">
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative border-[1px] border-[#d7d7d8] rounded-full px-8 md:px-12 py-[15px] overflow-hidden group min-w-[200px]"
          >
            {/* Liquid Background Layer - Upward Flow */}
            <motion.div
              animate={{ 
                y: isHovered ? "0%" : (isHovered === false ? "-100%" : "100%"),
                borderRadius: isHovered ? "0% 0% 0% 0%" : "50% 50% 0% 0%" 
              }}
              initial={{ y: "100%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-[#4763e4] z-0"
            />
            
            <span className={`relative z-10 font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-base md:text-lg transition-colors duration-300 pointer-events-none ${isHovered ? 'text-white' : 'text-black'}`}>
              More work
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
