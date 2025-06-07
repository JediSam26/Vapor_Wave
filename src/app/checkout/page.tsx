'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Logo from '@/components/landing-page/Logo';

const CheckoutPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('product_id'); // Example of getting product info

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin?redirect=/checkout');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><p>Carregando checkout...</p></div>;
  }

  if (!user) {
    return null; // Will be redirected
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-card p-4">
      <div className="mb-8">
         <Logo />
      </div>
      <Card className="w-full max-w-lg shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Finalizar Compra</CardTitle>
          <CardDescription className="text-center">Revise seu pedido e complete o pagamento.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border border-border rounded-md bg-input/50">
            <h3 className="font-semibold text-lg mb-2">Resumo do Pedido</h3>
            {productId ? (
              <p>Produto selecionado: ID {productId}</p>
            ) : (
              <p>Nenhum produto selecionado. Adicione itens ao seu carrinho.</p>
            )}
            {/* Placeholder for order summary, e.g., item list, total price */}
            <p className="mt-4">Total: <span className="font-bold text-primary">R$ XXX,XX</span></p>
          </div>
          
          <div className="p-4 border border-border rounded-md bg-input/50">
            <h3 className="font-semibold text-lg mb-2">Informações de Entrega</h3>
            {/* Placeholder for shipping form */}
            <p className="text-sm text-muted-foreground">Endereço: {user.displayName || user.email}</p>
             <p className="text-sm text-muted-foreground">Preencha seu endereço completo aqui...</p>
          </div>

          <div className="p-4 border border-border rounded-md bg-input/50">
            <h3 className="font-semibold text-lg mb-2">Pagamento</h3>
            {/* Placeholder for payment options */}
            <p className="text-sm text-muted-foreground">Selecione seu método de pagamento...</p>
            <div className="flex space-x-2 mt-2">
                <Button variant="outline" size="sm">PIX</Button>
                <Button variant="outline" size="sm">Cartão</Button>
                <Button variant="outline" size="sm">Boleto</Button>
            </div>
          </div>

        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3">
            Confirmar Pedido e Pagar
          </Button>
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Continuar comprando
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CheckoutPage;
