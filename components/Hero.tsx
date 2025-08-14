export const Hero = () => {
  return (
    <section
      className="relative w-full h-200 flex items-center justify-center"
      style={{ backgroundColor: "#F8F5E4" }}
    >
      <img
        src="https://placehold.co/600x400"
        alt="Produtos naturais"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 text-center px-4">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: "#1D4B2E", fontFamily: "Merriweather" }}
        >
          Saúde em cada detalhe
        </h1>
        <p
          className="text-lg md:text-2xl mb-6"
          style={{ color: "#83794F", fontFamily: "Open Sans" }}
        >
          Sementes, chás e produtos naturais para o seu bem-estar
        </p>
        <a
          href="/produtos"
          className="px-6 py-3 rounded font-semibold"
          style={{ backgroundColor: "#C4A656", color: "#FFFFFF" }}
        >
          Conheça nossos produtos
        </a>
      </div>
    </section>
  );
}