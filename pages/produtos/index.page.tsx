import { Footer } from "../../components";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { products } from "../../utils/products";
import { Product } from "../../utils/types";

export { Page };

function Page() {
const productsByCategory = products.reduce((acc: { [key: string]: Product[] }, product) => {
  if (!acc[product.category]) acc[product.category] = [];
  acc[product.category].push(product);
  return acc;
}, {});


  return (
    <div className="bg-[#FAF8F1] min-h-screen rounded-lg">
      <Header />

      <main className="max-w-7xl mx-auto py-16 px-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-[#1D4B2E] mb-12"
          style={{ fontFamily: "Merriweather" }}
        >
          Todos os Produtos
        </h1>

        {/* Renderiza cada categoria */}
        {Object.entries(productsByCategory).map(([category, items]) => (
          <section key={category} className="mb-12">
            <h2
              className="text-2xl md:text-3xl font-semibold text-[#1D4B2E] mb-6"
              style={{ fontFamily: "Merriweather" }}
            >
              {category}
            </h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
