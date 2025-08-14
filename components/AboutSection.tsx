export const AboutSection = () => {
  return (
    <section className="py-16 px-8 bg-[#F8F5E4] mb-10 rounded-lg shadow-lg" id="sobre">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/600x400?text=Fachada+da+Loja+com+Familia&font=Open+Sans"
            alt="Fachada da loja com a família"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1D4B2E] mb-4"
            style={{ fontFamily: "Merriweather" }}
          >
            Nossa História
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-body">
            A TO + NATURAL nasceu da paixão de uma família tradicional pela vida
            saudável e pelo contato com a natureza. Desde cedo, aprendemos o
            valor dos produtos frescos e naturais, cultivados com cuidado e
            responsabilidade.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed font-body">
            Nosso objetivo é levar esse cuidado e qualidade para cada cliente,
            oferecendo chás, sementes, frutas caramelizadas e produtos fitness
            que transformam o dia a dia em momentos de saúde e bem-estar. Cada
            detalhe reflete nossa dedicação e amor pelo que fazemos.
          </p>
        </div>
      </div>
    </section>
  );
};
