import { ProductCard } from "./ProductCard"

export const ProductCarousel = ({ products }) => {
  return (
    <div className="product-carousel">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}