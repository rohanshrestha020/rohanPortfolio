import svgPaths from "../../imports/svg-704djayzrz";
import { motion } from "motion/react";
import rohanImg from "../../assets/rohan_img.png"

export function Hero() {
  return (
    <section className="relative bg-[#999d9e] min-h-screen overflow-hidden">
      {/* Radial Gradient */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[625px] h-[700px] pointer-events-none">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 625 700">
          <ellipse cx="312.5" cy="350" fill="url(#paint0_radial_hero)" rx="312.5" ry="350" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(313 350) rotate(90) scale(350 312.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_hero" r="1">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Navigation - Desktop */}
      <div className="hidden lg:block absolute left-[242px] top-[27px] w-[calc(100%-484px)] max-w-[1436px]">
        <div className="flex justify-between items-center font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold text-[18px] text-white whitespace-nowrap">
          <p style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>Design by Rohan</p>
          <div className="flex gap-[51px] items-center">
            <a href="#work" className="hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>Work</a>
            <a href="#about" className="hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>About</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden px-4 py-6 flex justify-between items-center">
        <p className="font-['Bricolage_Grotesque:SemiBold',sans-serif] text-white text-base" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>Design by Rohan</p>
        <button className="text-white p-2">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Location Badge - Desktop */}
      <div className="hidden md:block absolute left-0 top-[490px] bg-[#1c1d20] rounded-br-[50px] rounded-tr-[50px] h-[95px] w-[241px] pl-[34px]">
        <div className="flex gap-[49px] items-center h-full">
          <div className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[24px] text-[#fafafa] text-[20px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
            <p className="mb-0">Located </p>
            <p className="mb-0">in the</p>
            <p className="mb-0">Nepal</p>
          </div>
          <div className="bg-[#999d9e] rounded-[38px] size-[60px] flex items-center justify-center px-[26px] py-[20px]">
            <div className="size-[47.54px] flex items-center justify-center">
              <div className="rotate-[-12.18deg]">
                <div className="size-[40px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <g>
                      <path d={svgPaths.p19a01780} stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p11584f00} stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M3.33428 20.0001H36.6676" stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p3e94d900} stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p14b3fe0} stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Location Badge */}
      <div className="md:hidden mx-4 mb-6 inline-flex items-center gap-4 bg-[#1c1d20] rounded-full px-6 py-4">
        <div className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[#fafafa] text-sm" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="mb-0">Located in Nepal</p>
        </div>
        <div className="bg-[#999d9e] rounded-full p-3">
          <div className="w-6 h-6 rotate-[-12deg]">
            <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
              <path d={svgPaths.p19a01780} stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p11584f00} stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M3.33428 20.0001H36.6676" stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p3e94d900} stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p14b3fe0} stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Portrait Image */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[59px] w-full h-full max-w-[90vw] max-h-[90vw] lg:max-w-none lg:max-h-none">
        <img
          alt="Rohan Dangol"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          src={`${rohanImg}?v=2`}
        />
      </div>

      {/* Arrow Icon - Desktop */}
      <div className="hidden lg:block absolute right-[15%] xl:right-[20%] top-[25%] xl:top-[30%] size-[50px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
          <g>
            <path d={svgPaths.p242139c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p3eb3ba00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>

      {/* Freelance Text - Desktop */}
      <div className="hidden lg:block absolute right-[12%] xl:right-[17%] top-[35%] xl:top-[40%] font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[54px] text-[32px] xl:text-[36px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Freelance</p>
        <p className="mb-0">Designer & Developer</p>
      </div>

      {/* Mobile Freelance Text */}
      <div className="lg:hidden text-right px-4 mb-8">
        <div className="inline-block text-white">
          <div className="mb-2">
            <svg className="w-8 h-8 ml-auto" fill="none" viewBox="0 0 50 50">
              <path d={svgPaths.p242139c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d={svgPaths.p3eb3ba00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
          <p className="font-['Bricolage_Grotesque:Medium',sans-serif] text-base mb-1" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>Freelance</p>
          <p className="font-['Bricolage_Grotesque:Medium',sans-serif] text-base" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>Designer & Developer</p>
        </div>
      </div>

      {/* Horizontal Line - Desktop */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="text-[15vw] font-['Bricolage_Grotesque:Medium',sans-serif] opacity-80 font-medium text-white  uppercase tracking-tighter leading-none py-4"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Rohan Dangol &nbsp; Rohan Dangol &nbsp; Rohan Dangol &nbsp; Rohan Dangol &nbsp;
          </div>
          <div
            className="text-[15vw] font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-white opacity-80 uppercase tracking-tighter leading-none py-4"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Rohan Dangol &nbsp; Rohan Dangol &nbsp; Rohan Dangol &nbsp; Rohan Dangol &nbsp;
          </div>
        </motion.div>
      </div>


      {/* Name Title - Tablet */}
      <div className="hidden md:block lg:hidden absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="text-[20vw] font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-white opacity-10 uppercase tracking-tighter leading-none py-4"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Rohan Dangol &nbsp; Rohan Dangol &nbsp;
          </div>
          <div
            className="text-[20vw] font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-white opacity-10 uppercase tracking-tighter leading-none py-4"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Rohan Dangol &nbsp; Rohan Dangol &nbsp;
          </div>
        </motion.div>
      </div>

      {/* Name Title - Mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="text-[25vw] font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-white opacity-10 uppercase tracking-tighter leading-none py-4"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Rohan Dangol &nbsp; Rohan Dangol &nbsp;
          </div>
          <div
            className="text-[25vw] font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-white opacity-10 uppercase tracking-tighter leading-none py-4"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Rohan Dangol &nbsp; Rohan Dangol &nbsp;
          </div>
        </motion.div>
      </div>
    </section>
  );
}