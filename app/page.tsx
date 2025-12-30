import { Button } from '@/components/ui/button';
import { Gamepad2Icon } from 'lucide-react';

const Home = () => {
  return (
    <div className=''>
      <section
        id='hero'
        className='flex flex-col gap-4 max-w-200 mx-auto py-6 my-12'>
        <h1 className='text-4xl stext-iris font-medium'>
          󱜙 Hello! Me chamo Kodie! <br /> Sou um desenvolvedor de <strong>Jogos</strong>.
        </h1>
        <p className='italic stext-subtle'>
          Sinto paixão por jogos desde me entendo por gente. <br /> E uso minhas habilidades para dar vida a minhas
          ideias.
        </p>
        <Button
          className='max-w-fit'
          size='lg'>
          <Gamepad2Icon />
          Meus Projetos
        </Button>
      </section>
    </div>
  );
};

export default Home;
