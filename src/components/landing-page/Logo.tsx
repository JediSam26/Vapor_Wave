import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
      VaporWave
    </Link>
  );
};

export default Logo;
