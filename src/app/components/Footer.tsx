import svgPaths from "../../imports/svg-8qcxv7z41r";

export function Footer() {
  const socialLinks = [
    { platform: "Instagram", count: "1,214", url: "https://instagram.com" },
    { platform: "Dribbble", count: "2,543", url: "https://dribbble.com" },
    { platform: "LinkedIn", count: "8,291", url: "https://linkedin.com" },
    { platform: "X", count: "4,120", url: "https://x.com" },
    { platform: "Figma", count: "1,892", url: "https://figma.com" },
  ];

  return (
    <footer id="contact" className="bg-[#1c1d20] text-white py-12 md:py-20 lg:py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        {/* Heading */}
        <div className="mb-12 md:mb-20">
          <div className="font-['Switzer:Medium',sans-serif] text-4xl md:text-5xl lg:text-7xl tracking-tight leading-tight">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white">Lets</span>
              <span className="text-white">build</span>
            </div>
            <div className="text-[#828282]">incredible work together.</div>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Email */}
          <div>
            <div className="text-[#828282] text-sm mb-3">Email</div>
            <a 
              href="mailto:rohan@example.com" 
              className="font-['Switzer:Medium',sans-serif] text-white text-lg hover:text-gray-300 transition-colors"
            >
              rohan@example.com
            </a>
          </div>

          {/* Call Me */}
          <div>
            <div className="text-[#828282] text-sm mb-3">Call Me</div>
            <a 
              href="#contact" 
              className="font-['Switzer:Medium',sans-serif] text-white text-lg hover:text-gray-300 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Social */}
          <div>
            <div className="text-[#828282] text-sm mb-4">Social</div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 text-xs transition-colors flex items-center gap-2"
                >
                  <span>{social.platform}</span>
                  <span className="text-black bg-white rounded-full px-2 py-0.5 text-xs">
                    {social.count}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-[#828282]">
            <div>
              <p className="mb-2 md:mb-0">© 2026 Rohan Dangol. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Large footer text */}
        <div className="mt-12 md:mt-20 overflow-hidden">
          <h2 className="font-['Switzer:Medium',sans-serif] text-6xl md:text-8xl lg:text-[160px] xl:text-[200px] text-white/5 whitespace-nowrap">
            ROHAN DANGOL
          </h2>
        </div>
      </div>
    </footer>
  );
}
