export interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  description: string;
  imageUrl: string;
  googleMapsUrl: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: "TO + NATURAL – Taubaté Matriz",
    address:
      "Av. Vila Rica, 635 - Chácara do Visconde, Taubaté - SP, 12050-480",
    city: "Taubaté",
    state: "SP",
    description:
      "Nossa loja matriz, referência em produtos naturais e saudáveis na região. Atendimento personalizado e produtos frescos todos os dias.",
    imageUrl:
      "https://placehold.co/600x400?text=Loja+Taubate+Matriz&font=Open+Sans",
    googleMapsUrl: "https://goo.gl/maps/6s1tYv6hKJ82",
  },
  {
    id: 2,
    name: "TO + NATURAL – Pindamonhangaba",
    address:
      "Rua Quinze de Novembro, 200 - Centro, Pindamonhangaba - SP, 12400-120",
    city: "Pindamonhangaba",
    state: "SP",
    description:
      "Segunda unidade da TO + NATURAL, trazendo toda a qualidade e variedade de produtos naturais para a cidade de Pindamonhangaba.",
    imageUrl:
      "https://placehold.co/600x400?text=Loja+Pindamonhangaba&font=Open+Sans",
    googleMapsUrl: "https://goo.gl/maps/jf8a1F5Y7oN2",
  },
  {
    id: 3,
    name: "TO + NATURAL – Taubaté II",
    address: "Av. Itália, 450 - Vila São José, Taubaté - SP, 12021-310",
    city: "Taubaté",
    state: "SP",
    description:
      "Terceira loja da rede, oferecendo conveniência e produtos saudáveis para toda a comunidade local.",
    imageUrl:
      "https://placehold.co/600x400?text=Loja+Taubate+II&font=Open+Sans",
    googleMapsUrl: "https://goo.gl/maps/5ZJd2uB5zvD2",
  },
];
