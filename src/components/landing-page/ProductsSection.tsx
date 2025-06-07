import ProductCard from './ProductCard';

const products = [
  { id: 'vape1', name: 'VaporMax Pro', description: 'Desempenho superior e design elegante.', flavor: 'Menta Refrescante', price: 'R$ 249,90', imageSrc: 'https://placehold.co/400x400.png', isBestseller: true },
  { id: 'vape2', name: 'Aero Lite', description: 'Compacto, leve e perfeito para o dia a dia.', flavor: 'Frutas Vermelhas', price: 'R$ 189,90', imageSrc: 'https://placehold.co/400x400.png' },
  { id: 'vape3', name: 'Stealth X', description: 'Discreto e potente, com bateria duradoura.', flavor: 'Tabaco Clássico', price: 'R$ 219,90', imageSrc: 'https://placehold.co/400x400.png', promoLabel: 'NOVO!' },
  { id: 'vape4', name: 'CloudChaser Z', description: 'Para os amantes de grandes nuvens de vapor.', flavor: 'Mix Tropical', price: 'R$ 299,90', imageSrc: 'https://placehold.co/400x400.png' },
];

const ProductsSection = () => {
  return (
    <section id="products" className="container mx-auto px-4 py-16 md:py-24 bg-background">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary font-headline">Nossos Modelos Populares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
