import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Logo from '@/components/landing-page/Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContatoPage() {
  // Placeholder action for form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send to an API endpoint
    alert('Mensagem enviada! (Esta é uma demonstração)');
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <header className="container mx-auto flex justify-between items-center py-6">
        <Logo />
        <Button asChild variant="outline">
          <Link href="/">Voltar à Loja</Link>
        </Button>
      </header>
      <main className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-primary mb-10 text-center font-headline">Entre em Contato</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary/90">Fale Conosco</h2>
            <p className="text-foreground/80">Tem alguma dúvida, sugestão ou precisa de ajuda? Nossa equipe está pronta para atender você.</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-accent"/>
                <a href="mailto:contato@vaporwave.com" className="hover:text-accent">contato@vaporwave.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-accent"/>
                <span>(XX) XXXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-accent"/>
                <span>Rua Fictícia, 123 - Cidade Exemplo, BR</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-xl">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-primary-foreground/90">Nome Completo</Label>
                <Input type="text" name="name" id="name" required className="mt-1 block w-full bg-input" />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-primary-foreground/90">Seu Email</Label>
                <Input type="email" name="email" id="email" required className="mt-1 block w-full bg-input" />
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-primary-foreground/90">Assunto</Label>
                <Input type="text" name="subject" id="subject" required className="mt-1 block w-full bg-input" />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-primary-foreground/90">Sua Mensagem</Label>
                <Textarea name="message" id="message" rows={4} required className="mt-1 block w-full bg-input" />
              </div>
              <div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
