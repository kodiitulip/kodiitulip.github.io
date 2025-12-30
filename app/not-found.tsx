import { Button } from '@/components/ui/button';
import { HouseIcon } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className='flex flex-col gap-4 max-w-140 m-auto justify-center items-center h-full text-center'>
      <i className='nf nf-md-robot_confused stext-iris text-6xl' />
      <h1 className='font-bold stext-iris text-2xl shrink-0'>Parece que você se perdeu.</h1>
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
