import { Header,AboutSection,Carousel,Footer, Hero, ProductCard,ProductCarousel } from "../../components"

export { Page }

function Page() {
  return (
   <div>
    <Header />
    <Hero />
    <Carousel />
    <ProductCarousel products={[]} />
    <AboutSection />
    <Footer />
   </div>
  )
}
