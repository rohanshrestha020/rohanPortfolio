import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const portfolioItems = Array(8).fill({
    image: "https://images.unsplash.com/photo-1746003625471-8785a7d19d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwZXJmb3JtYW5jZSUyMHRyYWluaW5nfGVufDF8fHx8MTc3NDQxMzc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Portfolio item"
  });

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        {/* First row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-6 md:mb-8 lg:mb-12">
          {portfolioItems.slice(0, 4).map((item, index) => (
            <div key={index} className="bg-[#d6d8dc] p-6 md:p-8 lg:p-9 rounded-lg hover:scale-105 transition-transform cursor-pointer group">
              <div className="aspect-[4/3] overflow-hidden rounded">
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {portfolioItems.slice(4, 8).map((item, index) => (
            <div key={index} className="bg-[#d6d8dc] p-6 md:p-8 lg:p-9 rounded-lg hover:scale-105 transition-transform cursor-pointer group">
              <div className="aspect-[4/3] overflow-hidden rounded">
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
