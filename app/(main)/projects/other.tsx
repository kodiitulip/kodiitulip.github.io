import { Button } from '@/components/ui/button';
import { SiGithub, SiItchdotio } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Esse Site!',
    imgSrc: '/images/site.png',
    sourceCodePage: 'https://github.com/kodiitulip/kodiitulip.github.io'
  },
  {
    title: 'Sistema de construção 3D na Godot',
    imgSrc: '/images/3dbuild.png',
    sourceCodePage: 'https://github.com/kodiitulip/3d-building-system'
  },
  {
    title: 'Camera 3D para RTS na Godot',
    imgSrc: '/images/rtscam.png',
    sourceCodePage: 'https://github.com/kodiitulip/strategy-game-camera'
  },
  {
    title: 'Sistema de construção 2D na Godot',
    imgSrc: '/images/2dbuild.gif',
    sourceCodePage: 'https://github.com/kodiitulip/dynamic-building-system'
  }
];

export const OtherProjectsSection = () => {
  return (
    <section
      id='other'
      className='mx-8 my-12 flex max-w-140 flex-col gap-4 py-6 @lg:mx-auto @xl:max-w-5xl'>
      <h1 className='text-lg font-medium text-(--theme-color) @sm:text-2xl @[43rem]:text-4xl'>Outros Projetos</h1>
      <i className='stext-subtle text-xs @[42rem]:text-base'>
        Aqui deixo amostra meus projetos que não são especificamente jogos
      </i>

      <div className='flex w-full flex-wrap justify-around gap-x-4 gap-y-12'>
        {projects.map(({ title, imgSrc, sourceCodePage }, idx) => (
          <div
            key={`${title}-${idx}`}
            className='sbg-overlay w-full max-w-120'>
            <h1 className='my-2 text-center text-lg text-(--theme-color)'>
              <strong>{title}</strong>
            </h1>
            <div className='relative aspect-video w-full'>
              <Image
                src={imgSrc}
                alt={title}
                fill
                className='object-contain'
              />
            </div>
            <div className='panel flex-col justify-between md:flex-row'>
              <Button
                variant='link'
                asChild>
                <Link
                  href={sourceCodePage}
                  target='_blank'>
                  <SiGithub size={16} /> Código Fonte
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
