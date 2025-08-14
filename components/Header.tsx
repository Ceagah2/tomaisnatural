import Logo from '../assets/images/noBg_logo.png';
export function Header() {
  const MenuItems = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Contato", href: "/#contato" },
    {name: "Nossas Lojas", href: "/nossas-lojas"},
  ]
  return (
    <header
      className="flex items-center justify-between px-8 py-4 shadow-md rounded-lg"
      style={{ backgroundColor: "#F8F5E4" }}
    >
      <div className="relative group flex items-center">
        <img src={Logo} alt="Logo" className="h-15 w-20" />
      </div>

      <nav className="hidden md:flex gap-6">
        {MenuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-2xl font-semibold text-gray-800 hover:text-shadow-md"
            style={{ color: "#1D4B2E", fontFamily: "Merriweather" }}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <a
        href="/contato"
        className="px-4 py-2 rounded font-semibold"
        style={{
          backgroundColor: "#C4A656", // dourado
          color: "#FFFFFF", // branco
        }}
      >
        Entre em contato
      </a>
    </header>
  );
}
