import { Button } from '@/components/ui/button';
import { HouseIcon } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section
      id='not-found'
      className='absolute top-1/2 left-1/2 flex max-w-140 -translate-1/2 flex-col items-center justify-center gap-4 text-center text-(--theme-color)'>
      <i className='nf nf-md-robot_confused text-6xl'>
        <span className='sr-only'>Robô confuso</span>
      </i>
      <h1 className='shrink-0 text-2xl'>Parece que você se perdeu.</h1>
      <Button
        size='lg'
        asChild>
        <Link href='/'>
          <HouseIcon /> Voltar
        </Link>
      </Button>
    </section>
  );
};

export default NotFound;
