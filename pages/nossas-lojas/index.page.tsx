import { Footer } from "../../components";
import { Header } from "../../components/Header";
import { stores } from "../../utils/lojas";

export { Page };

function Page() {
  return (
    <div className="bg-[#FAF8F1] min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-[#1D4B2E] mb-12 text-center"
          style={{ fontFamily: "Merriweather" }}
        >
          Nossas Lojas
        </h1>

        <div className="flex flex-col gap-12">
          {stores.map((store, index) => (
            <div
              key={store.id}
              className={`flex flex-col md:flex-row gap-8 bg-white shadow-md rounded-lg p-6 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <img
                  src={store.imageUrl}
                  alt={`Fachada da loja ${store.name}`}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2
                    className="text-2xl font-bold text-[#1D4B2E] mb-2"
                    style={{ fontFamily: "Merriweather" }}
                  >
                    {store.name}
                  </h2>
                  <p className="text-gray-700 mb-4">{store.description}</p>
                  <p className="text-gray-700 mb-2">
                    Endereço: {store.address} – {store.city}, {store.state}
                  </p>
                  <a
                    href={store.googleMapsUrl}
                    target="_blank"
                    className="text-[#D4B200] font-semibold hover:underline"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
