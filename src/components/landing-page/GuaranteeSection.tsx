import { ShieldCheck, CreditCard, PackageCheck } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card rounded-xl my-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-headline">Sua Compra 100% Segura</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Produto original com envio 100% seguro e rastreável. Sua satisfação é nossa prioridade.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center p-4 bg-background rounded-lg shadow-sm">
            <ShieldCheck className="h-8 w-8 text-accent mr-3" />
            <span className="font-medium text-primary-foreground">Site Seguro HTTPS</span>
          </div>
          <div className="flex items-center p-4 bg-background rounded-lg shadow-sm">
            <CreditCard className="h-8 w-8 text-accent mr-3" />
            <span className="font-medium text-primary-foreground">Pagamento Facilitado</span>
          </div>
          <div className="flex items-center p-4 bg-background rounded-lg shadow-sm">
            <PackageCheck className="h-8 w-8 text-accent mr-3" />
            <span className="font-medium text-primary-foreground">Envio Rastreável</span>
          </div>
        </div>
         <p className="text-sm text-muted-foreground mt-8">Aceitamos Pix, Cartão de Crédito e Boleto.</p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
