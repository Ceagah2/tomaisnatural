import { useRef } from "react";
import { Product } from "../utils/types";
import { ProductCard } from "./ProductCard";

export const ProductCarousel = ({ products }: { products: Product[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <span className="text-2xl font-bold mb-4 ml-4 text-[#1D4B2E]"> Conheça nossos produtos </span>

      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide py-4 px-2 rounded-lg space-x-4 mb-10"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1D4B2E] text-white p-2 rounded-full hidden md:flex"
      >
        &#8592;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1D4B2E] text-white p-2 rounded-full hidden md:flex"
      >
        &#8594;
      </button>
    </div>
  );
};
