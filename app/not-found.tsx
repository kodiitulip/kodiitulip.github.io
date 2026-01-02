import { Button } from '@/components/ui/button';
import { HouseIcon } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className='m-auto flex h-full max-w-140 flex-col items-center justify-center gap-4 text-center'>
      <i className='nf nf-md-robot_confused stext-iris text-6xl' />
      <h1 className='stext-iris shrink-0 text-2xl font-bold'>Parece que você se perdeu.</h1>
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
