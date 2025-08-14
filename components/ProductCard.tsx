import { Product } from "../utils/types";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex-shrink-0 w-64 md:w-72 bg-white shadow-md rounded-lg overflow-hidden m-2">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-[#1D4B2E]">{product.name}</h4>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <p className="mt-2 font-bold text-[#D4B200]">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
