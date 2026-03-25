export function About() {
  return (
    <section id="about" className="bg-white py-12 md:py-20 lg:py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#1c1d20] text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-wide">
              Helping brands to stand out in the digital era.
              <br className="hidden md:block" />
              Together we will set the new status quo. No nonsense, always on the cutting edge
            </h2>
          </div>

          {/* Right column */}
          <div className="flex items-center">
            <p className="font-['Inter:Medium',sans-serif] text-[#1c1d20] text-lg md:text-xl lg:text-2xl leading-relaxed">
              The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
