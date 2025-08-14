import { Footer } from "../../components";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { products } from "../../utils/products";

export { Page };

function Page() {
  return (
    <div className="bg-[#FAF8F1] min-h-screen rounded-lg">
      <Header />

      <main className="max-w-7xl mx-auto py-16 px-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-[#1D4B2E] mb-8"
          style={{ fontFamily: "Merriweather" }}
        >
          Todos os Produtos
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
