import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket, Palette, BatteryCharging } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: <Rocket className="h-8 w-8 text-accent" />, text: 'Tecnologia Avançada' },
    { icon: <Palette className="h-8 w-8 text-accent" />, text: 'Sabores Incríveis' },
    { icon: <BatteryCharging className="h-8 w-8 text-accent" />, text: 'Bateria de Longa Duração' },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-accent font-headline">
        Descubra o Novo Jeito de Vaporizar!
      </h1>
      <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
        Estilo, sabor e liberdade na palma da sua mão.
      </p>
      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
        <Link href="#products">Comprar Agora</Link>
      </Button>

      <div className="mt-12 md:mt-20 relative animate-slide-in-up">
        <Image
          src="https://placehold.co/1000x300.png"
          alt="Vape moderno"
          width={1000}
          height={300}
          className="rounded-lg shadow-2xl mx-auto object-contain"
          data-ai-hint="modern vape"
          priority
        />
      </div>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
            {feature.icon}
            <p className="mt-3 text-md font-medium text-foreground">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
