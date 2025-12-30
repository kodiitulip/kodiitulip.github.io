import { Button } from '@/components/ui/button';
import { Gamepad2Icon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='flex flex-col gap-4 max-w-140 mx-8 @lg:mx-auto py-6 my-12'>
      <h1 className='text-lg @sm:text-2xl @[43rem]:text-4xl text-(--theme-color) font-medium'>
        Hello! Me chamo Kodie! <br /> Sou um desenvolvedor de <strong>Jogos</strong>
      </h1>
      <i className='stext-subtle text-xs @[42rem]:text-base'>
        Sinto paixão por jogos desde me entendo por gente. <br /> E uso minhas habilidades para dar vida as minhas
        ideias
      </i>
      <Button
        className='max-w-fit'
        size='lg'>
        <Gamepad2Icon />
        Meus Projetos
      </Button>
    </section>
  );
};

export { HeroSection };
