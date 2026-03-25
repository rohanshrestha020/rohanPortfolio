export function Projects() {
  const projects = [
    { name: "DASTAA", category: "Product Design" },
    { name: "Sangatha.io", category: "Product Design" },
    { name: "ST Builder", category: "Product Design" },
    { name: "Sangatha.io", category: "Product Design" },
  ];

  return (
    <section id="work" className="bg-white py-12 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="border-t-2 border-[#D7D7D8]"></div>
              <div className="py-8 md:py-12 lg:py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                <h3 className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#1c1d20] text-3xl md:text-5xl lg:text-6xl group-hover:translate-x-4 transition-transform">
                  {project.name}
                </h3>
                <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#1c1d20] text-lg md:text-xl lg:text-2xl">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
          <div className="border-t-2 border-[#D7D7D8]"></div>
        </div>

        {/* More work button */}
        <div className="flex justify-center mt-12 md:mt-20">
          <button className="border-2 border-[#d7d7d8] rounded-full px-8 md:px-12 py-4 md:py-6 hover:bg-gray-50 transition-colors">
            <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-black text-lg md:text-xl">
              More work
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
