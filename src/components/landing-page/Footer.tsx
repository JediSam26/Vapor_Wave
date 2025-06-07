import Link from 'next/link';
import { Instagram, Facebook, Twitter, Send } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo />
            <p className="mt-2 text-sm">
              VaporWave - Seu estilo, seu sabor, sua liberdade.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-3">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/termos-de-uso" className="hover:text-accent transition-colors">Termos de Uso</Link></li>
              <li><Link href="/politica-de-privacidade" className="hover:text-accent transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-3">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={24} /></Link>
              <Link href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter size={24} /></Link>
              <Link href="#" aria-label="Telegram" className="hover:text-accent transition-colors"><Send size={24} /></Link>
            </div>
            <p className="mt-4 text-sm">CNPJ: 00.000.000/0001-00</p>
            <p className="text-sm">Atendimento: seg-sex, 9h-18h</p>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-sm">
          <p>&copy; {currentYear} VaporWave. Todos os direitos reservados.</p>
          <p className="mt-1">Produto destinado a maiores de 18 anos. Se beber, não vape.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
