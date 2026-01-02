import { Button } from '@/components/ui/button';
import { Gamepad2Icon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='mx-8 my-12 flex max-w-140 flex-col gap-4 py-6 @lg:mx-auto'>
      <h1 className='text-lg font-medium text-(--theme-color) @sm:text-2xl @[43rem]:text-4xl'>
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
