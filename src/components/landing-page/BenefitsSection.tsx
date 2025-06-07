import { XCircle, Wind, Repeat, Smartphone } from 'lucide-react';

const benefits = [
  { icon: <XCircle className="h-10 w-10 text-accent" />, title: 'Sem cheiro de cigarro', description: 'Desfrute de ambientes sem odores desagradáveis.' },
  { icon: <Wind className="h-10 w-10 text-accent" />, title: 'Vapor suave e aromático', description: 'Experiência sensorial com diversos sabores.' },
  { icon: <Repeat className="h-10 w-10 text-accent" />, title: 'Recarregável e ecológico', description: 'Menos desperdício e mais sustentabilidade.' },
  { icon: <Smartphone className="h-10 w-10 text-accent" />, title: 'Discreto e fácil de usar', description: 'Praticidade para o seu dia a dia.' },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="container mx-auto px-4 py-16 md:py-24 bg-card rounded-xl my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary font-headline">Vantagens Exclusivas VaporWave</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            {benefit.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2 text-primary-foreground">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
