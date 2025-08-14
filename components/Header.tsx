export const Header = () => {
return (
    <header className="bg-brand-primary text-brand.white p-4 flex justify-between items-center">
      <h1 className="font-heading text-2xl">Loja Natural</h1>
      <nav>
        <ul className="flex gap-4 font-body text-lg">
          <li>Home</li>
          <li>Produtos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
