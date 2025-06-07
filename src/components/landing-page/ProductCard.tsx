import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  flavor: string;
  price: string;
  imageSrc: string;
  isBestseller?: boolean;
  promoLabel?: string;
};

const ProductCard = ({ id, name, description, flavor, price, imageSrc, isBestseller, promoLabel }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-slide-in-up">
      <div className="relative h-60 w-full">
        <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" data-ai-hint="vape device" />
        {isBestseller && (
          <Badge variant="destructive" className="absolute top-3 right-3 text-sm px-3 py-1 bg-accent text-accent-foreground">
            🔥 MAIS VENDIDO
          </Badge>
        )}
        {promoLabel && !isBestseller && (
           <Badge variant="secondary" className="absolute top-3 right-3 text-sm px-3 py-1 bg-primary text-primary-foreground">
            {promoLabel}
          </Badge>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-primary-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <p className="text-sm text-muted-foreground mb-3">Sabor: <span className="font-medium text-accent">{flavor}</span></p>
        <p className="text-2xl font-bold text-primary-foreground mb-4 mt-auto">{price}</p>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/checkout?product_id=${id}`}>
            <ShoppingCart className="mr-2 h-5 w-5" /> Adicionar ao Carrinho
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
