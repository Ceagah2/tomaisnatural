import { AboutSection, Carousel, Footer, Header, Hero, ProductCarousel } from "../../components";
import { products } from '../../utils/products';
export { Page };

function Page() {
    const highlightedProducts = products.filter((p) => p.isHighlighted);

  return (
    <div>
      <Header />
      <Hero />
      <Carousel />
      <ProductCarousel products={highlightedProducts} />
      <AboutSection />
      <Footer />
    </div>
  );
}
