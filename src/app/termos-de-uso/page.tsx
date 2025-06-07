import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/landing-page/Logo';

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <header className="container mx-auto flex justify-between items-center py-6">
        <Logo />
        <Button asChild variant="outline">
          <Link href="/">Voltar à Loja</Link>
        </Button>
      </header>
      <main className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-primary mb-6 font-headline">Termos de Uso</h1>
        <div className="prose prose-invert max-w-none text-foreground/80 space-y-4">
          <p>Bem-vindo à VaporWave. Ao acessar e usar nosso site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Por favor, leia estes termos com atenção.</p>
          
          <h2 className="text-2xl font-semibold text-primary/90 pt-4">1. Uso do Site</h2>
          <p>Este site destina-se exclusivamente a usuários maiores de 18 anos. Ao utilizar este site, você declara ter idade legal para adquirir os produtos aqui ofertados.</p>
          
          <h2 className="text-2xl font-semibold text-primary/90 pt-4">2. Produtos</h2>
          <p>As informações sobre produtos, incluindo preços e disponibilidade, estão sujeitas a alterações sem aviso prévio. Esforçamo-nos para exibir com precisão as cores e imagens dos nossos produtos, mas não podemos garantir que a exibição do seu monitor seja precisa.</p>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">3. Contas de Usuário</h2>
          <p>Você é responsável por manter a confidencialidade de sua conta e senha e por restringir o acesso ao seu computador. Você concorda em aceitar a responsabilidade por todas as atividades que ocorram sob sua conta ou senha.</p>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">4. Política de Devolução e Reembolso</h2>
          <p>Consulte nossa Política de Devolução e Reembolso para obter informações detalhadas sobre como proceder em caso de devoluções ou necessidade de reembolso.</p>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">5. Propriedade Intelectual</h2>
          <p>Todo o conteúdo presente neste site, incluindo textos, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da VaporWave ou de seus fornecedores de conteúdo e protegido pelas leis de direitos autorais.</p>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">6. Limitação de Responsabilidade</h2>
          <p>A VaporWave não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar nossos produtos ou serviços.</p>

          <h2 className="text-2xl font-semibold text-primary/90 pt-4">7. Alterações nos Termos</h2>
          <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. Seu uso continuado do site após quaisquer alterações constitui sua aceitação dos novos termos.</p>

          <p className="pt-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}.</p>
        </div>
      </main>
    </div>
  );
}
