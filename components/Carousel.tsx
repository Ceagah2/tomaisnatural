import { useEffect, useState } from "react";
import { banners } from "../utils/images";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <a
            key={banner.id}
            href={banner.link}
            className="w-full flex-shrink-0 relative"
          >
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 bg-opacity-30 text-center px-4">
              <h3 className="text-white text-2xl md:text-4xl font-bold mb-2">
                {banner.title}
              </h3>
              <p className="text-white text-base md:text-lg">
                {banner.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
