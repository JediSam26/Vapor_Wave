import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Lucas M.', city: 'Rio de Janeiro, RJ', text: 'Melhor experiência de sabor que já tive. Uso todos os dias e recomendo!', imageSrc: 'https://placehold.co/100x100.png', rating: 5, hint: "man smiling" },
  { name: 'Juliana S.', city: 'São Paulo, SP', text: 'Design incrível e bateria dura muito. Chegou super rápido!', imageSrc: 'https://placehold.co/100x100.png', rating: 5, hint: "woman glasses" },
  { name: 'Fernando P.', city: 'Belo Horizonte, MG', text: 'Adeus cheiro de cigarro! Os sabores são fantásticos, virei fã.', imageSrc: 'https://placehold.co/100x100.png', rating: 5, hint: "man outdoors" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary font-headline">O Que Nossos Clientes Dizem</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-accent">
                <Image src={testimonial.imageSrc} alt={testimonial.name} layout="fill" objectFit="cover" data-ai-hint={testimonial.hint} />
              </div>
              <CardTitle className="text-xl text-primary-foreground">{testimonial.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.city}</p>
              <div className="flex mt-1">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center italic">"{testimonial.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
