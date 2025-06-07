import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/landing-page/Logo';

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <header className="container mx-auto flex justify-between items-center py-6">
        <Logo />
        <Button asChild variant="outline">
          <Link href="/">Voltar à Loja</Link>
        </Button>
      </header>
      <main className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-primary mb-6 font-headline">Política de Privacidade</h1>
        <div className="prose prose-invert max-w-none text-foreground/80 space-y-4">
          <p>A VaporWave está comprometida em proteger a privacidade dos seus usuários. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.</p>
          
          <h2 className="text-2xl font-semibold text-primary/90 pt-4">1. Coleta de Informações</h2>
          <p>Coletamos informações pessoais quando você se registra em nosso site, faz um pedido, se inscreve em nossa newsletter ou preenche um formulário. As informações coletadas podem incluir seu nome, endereço de e-mail, endereço postal, número de telefone e informações de pagamento.</p>
          
          <h2 className="text-2xl font-semibold text-primary/90 pt-4">2. Uso das Informações</h2>
          <p>As informações que coletamos podem ser usadas para:</p>
          <ul className="list-disc pl-6">
            <li>Processar suas transações e gerenciar seu pedido.</li>
            <li>Personalizar sua experiência e responder às suas necessidades individuais.</li>
            <li>Melhorar nosso site e atendimento ao cliente.</li>
            <li>Administrar concursos, promoções, pesquisas ou outros recursos do site.</li>
            <li>Enviar e-mails periódicos sobre seu pedido ou outros produtos e serviços.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">3. Proteção das Informações</h2>
          <p>Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais. Usamos criptografia SSL para proteger informações confidenciais transmitidas online.</p>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">4. Cookies</h2>
          <p>Utilizamos cookies para nos ajudar a lembrar e processar os itens no seu carrinho de compras, entender e salvar suas preferências para futuras visitas e compilar dados agregados sobre o tráfego e a interação no site.</p>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">5. Compartilhamento com Terceiros</h2>
          <p>Não vendemos, trocamos ou transferimos para terceiros suas informações pessoalmente identificáveis, exceto para parceiros confiáveis que nos auxiliam na operação do nosso site ou na condução dos nossos negócios, desde que essas partes concordem em manter essas informações confidenciais.</p>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">6. Seus Direitos</h2>
          <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco.</p>
          
          <h2 className="text-2xl font-semibold text-primary/90 pt-4">7. Consentimento</h2>
          <p>Ao usar nosso site, você concorda com nossa política de privacidade.</p>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">8. Alterações na Política de Privacidade</h2>
          <p>Se decidirmos alterar nossa política de privacidade, publicaremos essas alterações nesta página. </p>

          <p className="pt-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}.</p>
        </div>
      </main>
    </div>
  );
}
