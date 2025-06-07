'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/components/landing-page/Logo';
import { ChromeIcon } from 'lucide-react'; // Assuming ChromeIcon is available or using a placeholder

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push('/checkout'); // Or user dashboard
    }
  }, [user, loading, router]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      // Redirect handled by useEffect
    } catch (err: any) {
      setError(err.message || 'Falha na autenticação.');
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect handled by useEffect
    } catch (err: any) {
      setError(err.message || 'Falha ao entrar com Google.');
    }
  };
  
  if (loading) return <div className="flex justify-center items-center h-screen"><p>Carregando...</p></div>;
  if (user) return null; // Already authenticated, redirecting

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-card p-4">
      <div className="mb-8">
        <Logo />
      </div>
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{isSignUp ? 'Criar Conta' : 'Entrar na Sua Conta'}</CardTitle>
          <CardDescription>{isSignUp ? 'Preencha para criar uma nova conta.' : 'Bem-vindo de volta! Faça login.'}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required className="bg-input" />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              {isSignUp ? 'Criar Conta' : 'Entrar'}
            </Button>
          </form>
          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-border"></div>
            <span className="mx-2 text-xs text-muted-foreground">OU</span>
            <div className="flex-grow border-t border-border"></div>
          </div>
          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
            <ChromeIcon className="mr-2 h-4 w-4" /> {/* Placeholder if ChromeIcon doesn't exist, replace with Google SVG */}
            Entrar com Google
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-sm">
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-primary hover:underline">
            {isSignUp ? 'Já tem uma conta? Entrar' : 'Não tem uma conta? Criar agora'}
          </button>
          <Link href="/" className="mt-4 text-muted-foreground hover:text-primary transition-colors">
            Voltar para a loja
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
