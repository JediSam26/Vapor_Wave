import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const FinalCtaSection = () => {
  return (
    <section id="final-cta" className="py-16 md:py-24 neon-gradient text-center">
      <div className="container mx-auto px-4 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-background font-headline">
          Garanta Já o Seu Vape com Frete Grátis para Todo o Brasil!
        </h2>
        <p className="text-lg text-background/90 mb-2">
          Oferta por tempo limitado. Não perca!
        </p>
        <CountdownTimer />
        <Button asChild size="lg" className="bg-background hover:bg-background/90 text-primary px-10 py-4 text-xl font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <Link href="#products">Quero Meu Vape Agora!</Link>
        </Button>
      </div>
    </section>
  );
};

export default FinalCtaSection;
