import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Instagram, Linkedin, Dribbble } from "lucide-react";

export function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const path = useTransform(
    scrollYProgress,
    [0, 0.3],
    [
      "M0 0 Q 50 100 100 0 V 0 H 0 Z", // Curved bowl bulging into black
      "M0 0 Q 50 0 100 0 V 0 H 0 Z"   // Flattened (only at 90% of the travel)
    ]
  );

  return (
    <footer id="contact" ref={container} className="bg-black text-white pb-0 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Curved Transition Header - Increased to 50vh */}
      <div className="absolute top-0 left-[-10%] w-[120%] h-[50vh] pointer-events-none z-10">
        <svg className="w-full h-full text-white fill-current" preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.path d={path} />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto pt-20">
        {/* Top Section */}
        <div className="mb-20 relative">
          {/* Decorative Dot */}
          <div className="absolute -left-12 top-4 w-3 h-3 bg-white rounded-full hidden lg:block"></div>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-['Switzer:Medium',sans-serif] tracking-tighter leading-[0.9]">
            <span className="block text-white">Lets create</span>
            <span className="block text-[#454545]">incredible work together.</span>
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Email */}
          <div>
            <p className="text-[#828282] text-sm mb-4">Email</p>
            <a
              href="mailto:rohan@launchnow.design"
              className="text-xl md:text-2xl font-['Switzer:Medium',sans-serif] hover:text-gray-300 transition-colors"
            >
              rohan@launchnow.design
            </a>
          </div>

          {/* Call Me */}
          <div>
            <p className="text-[#828282] text-sm mb-4">Call Me</p>
            <a
              href="#"
              className="text-xl md:text-2xl font-['Switzer:Medium',sans-serif] hover:text-gray-300 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Social */}
          <div>
            <p className="text-[#828282] text-sm mb-4">Social</p>
            <div className="flex items-center gap-3">
              {/* X in a pill */}
              <a href="#" className="bg-white text-black rounded-full px-4 py-2 flex items-center gap-2 text-sm font-bold hover:bg-gray-200 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-[10px] md:text-xs">1,214</span>
              </a>

              {/* Instagram */}
              <a href="#" className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-2.5 rounded-full transition-colors flex items-center justify-center">
                <Instagram size={18} />
              </a>

              {/* Dribbble */}
              <a href="#" className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-2.5 rounded-full transition-colors flex items-center justify-center">
                <Dribbble size={18} />
              </a>

              {/* Behance */}
              <a href="#" className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-2.5 rounded-full transition-colors flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 10.511h-5.223c.106-1.554 1.255-2.031 2.457-2.031 1.255 0 2.221.529 2.408 1.481h2.174c-.194-2.186-2.072-3.649-4.582-3.649-2.836 0-4.757 1.833-4.757 5.045 0 3.228 1.956 5.06 4.887 5.06 2.628 0 4.636-1.503 4.839-4h-2.2c-.22 1.056-1.18 1.848-2.618 1.848-1.535 0-2.583-.934-2.73-2.254h7.503v-1.5zm-5.212 1.144c.058-1 .764-1.631 1.636-1.631.847 0 1.503.621 1.597 1.631h-3.233zM10.138 6H2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h8.138c2.478 0 4.362-1.393 4.362-3.722 0-1.288-.696-2.193-1.642-2.727.75-.48 1.336-1.248 1.336-2.383C14.194 7.218 12.35 6 10.138 6zm-1.847 4.144H3.945V8.169h4.346c.864 0 1.516.408 1.516 1.012 0 .61-.652 1.008-1.516 1.008zm.24 5.687H3.945v-2.16h4.433c1 0 1.704.456 1.704 1.066s-.704 1.094-1.704 1.094zM16.5 6h5v1h-5v-1z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-2.5 rounded-full transition-colors flex items-center justify-center">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-[#828282] text-xs uppercase tracking-widest">Menu</p>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm font-bold hover:text-gray-300">Work</a>
                <a href="#" className="text-sm font-bold hover:text-gray-300">Pricing</a>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 md:mt-0">
              <div className="invisible text-xs uppercase tracking-widest h-4">Menu</div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm font-bold hover:text-gray-300">Services</a>
                <a href="#" className="text-sm font-bold hover:text-gray-300">Blog</a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[#828282] text-xs uppercase tracking-widest">Legal</p>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm font-bold hover:text-gray-300">Terms of service</a>
                <a href="#" className="text-sm font-bold hover:text-gray-300">Privacy Policy</a>
              </div>
            </div>

            <div className="md:col-start-4 lg:col-start-5 md:text-right flex items-end md:justify-end">
              <p className="text-[#828282] text-sm">© 2026 Rohan Dangol</p>
            </div>
          </div>
        </div>

      </div>

      {/* Huge Background Text with Reflection - Centered and slightly smaller size */}
      <div className="relative mt-20 -mb-10 md:-mb-16 lg:-mb-20 select-none pointer-events-none flex flex-col items-center w-full overflow-hidden">
        <div className="relative flex flex-col items-center">
          <h1 className="text-[20vw] font-bold leading-[0.8] tracking-tighter text-white whitespace-nowrap text-center">
            .ROHAN
          </h1>

          {/* Reflection effect */}
          <div className="absolute top-[80%] left-0 right-0 flex flex-col items-center opacity-40">
            <h1 className="text-[20vw] font-bold leading-[0.8] tracking-tighter text-white whitespace-nowrap text-center scale-y-[-1] blur-[8px] md:blur-[12px] lg:blur-[18px]">
              .ROHAN
            </h1>
          </div>

          {/* Fade/Mask - Adjusted height for new size */}
          <div className="absolute bottom-[-10%] left-[-20%] right-[-20%] h-[80%] bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        </div>
      </div>
    </footer>
  );
}




