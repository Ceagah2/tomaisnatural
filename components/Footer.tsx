import Logo from "../assets/images/noBg_logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#132F1C] text-[#E6E0B6] py-12 px-8 rounded-lg shadow-lg mt-10" id="contato">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col items-start">
          <img src={Logo} alt="TO + NATURAL" className="h-50 w-auto mb-4" />
          <p className="text-sm md:text-base font-body">
            Saúde em cada detalhe
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h4 className="font-bold mb-2 font-heading">Navegação</h4>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-[#D4B200]">
                  Início
                </a>
              </li>
              <li>
                <a href="/produtos" className="hover:text-[#D4B200]">
                  Produtos
                </a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-[#D4B200]">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-[#D4B200]">
                  Contato
                </a>
              </li>
              <li>
                <a href="/nossas-lojas" className="hover:text-[#D4B200]">
                  Nossas Lojas
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-2 font-heading">Contato</h4>
            <ul className="space-y-1 text-sm md:text-base">
              <li>📞 (11) 99999-9999</li>
              <li>✉ contato@tonatural.com.br</li>
              <li>📍 Rua Exemplo, 123 – São Paulo, SP</li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="font-bold mb-2 font-heading">Siga-nos</h4>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-[#D4B200]">
                🐦
              </a>
              <a href="#" className="hover:text-[#D4B200]">
                📘
              </a>
              <a href="#" className="hover:text-[#D4B200]">
                📸
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="mt-8 text-center text-sm text-gray-400">
        Desenvolvido com ♥ por <span className="font-bold">Forge & Flow</span>
      </div>
    </footer>
  );
};
