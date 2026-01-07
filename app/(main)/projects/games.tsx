import { Button } from '@/components/ui/button';
import { SiGithub, SiItchdotio } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import Link from 'next/link';

const games = [
  {
    title: 'Frozen Inferno',
    imgSrc: 'https://img.itch.zone/aW1nLzIzMjcyMDkzLnBuZw==/315x250%23c/L4kPQA.png',
    itchIoPage: 'https://kodiitulip.itch.io/frozen-inferno',
    sourceCodePage: 'https://github.com/kodiitulip/frozen-inferno'
  },
  {
    title: 'Windy Seas',
    imgSrc: 'https://img.itch.zone/aW1nLzI0Nzg2Mjc1LnBuZw==/315x250%23c/V5tjpI.png',
    itchIoPage: 'https://kodiitulip.itch.io/windy-seas',
    sourceCodePage: 'https://github.com/kodiitulip/windy-seas'
  },
  {
    title: 'Specters Case',
    imgSrc: 'https://img.itch.zone/aW1nLzI0OTA5MDQzLnBuZw==/315x250%23c/Mh1cBh.png',
    itchIoPage: 'https://kodiitulip.itch.io/specters-case',
    sourceCodePage: 'https://github.com/kodiitulip/specters-case'
  },
  {
    title: 'Gestalt Game',
    imgSrc: 'https://img.itch.zone/aW1nLzE3NDUwMjgxLnBuZw==/315x250%23c/UHGg3H.png',
    itchIoPage: 'https://kodiitulip.itch.io/gestalt-game',
    sourceCodePage: 'https://github.com/kodiitulip/gestalt-game'
  },
  {
    title: "Sphinx's Gold",
    imgSrc: 'https://img.itch.zone/aW1nLzE1NzA0ODQ5LnBuZw==/315x250%23c/U27hvQ.png',
    itchIoPage: 'https://kodiitulip.itch.io/sphinxs-gold',
    sourceCodePage: 'https://github.com/kodiitulip/ouro-da-esfinge'
  }
];

export const GamesSection = () => {
  return (
    <section
      id='games'
      className='mx-8 my-12 flex max-w-140 flex-col gap-4 py-6 @lg:mx-auto @xl:max-w-5xl'>
      <h1 className='text-lg font-medium text-(--theme-color) @sm:text-2xl @[43rem]:text-4xl'>Jogos</h1>
      <i className='stext-subtle text-xs @[42rem]:text-base'>
        Aqui deixo amostra meus projetos de jogos que chegaram a um estado jogável
      </i>

      <div className='flex w-full flex-wrap justify-around gap-x-4 gap-y-12'>
        {games.map(({ title, imgSrc, itchIoPage, sourceCodePage }, idx) => (
          <div
            key={`${title}-${idx}`}
            className='sbg-overlay w-full max-w-120'>
            <h1 className='my-2 text-center text-lg text-(--theme-color)'>
              <strong>{title}</strong>
            </h1>
            <div className='relative aspect-video w-full'>
              <Image
                src={imgSrc}
                alt={`Banner de um jogo chamado ${title}`}
                fill
                className='object-contain'
              />
            </div>
            <div className='panel flex-col justify-between md:flex-row'>
              <Button
                variant='link'
                className='w-fit'
                asChild>
                <Link
                  href={itchIoPage}
                  target='_blank'>
                  <SiItchdotio size={16} /> Página Itch.io
                </Link>
              </Button>
              <Button
                variant='link'
                className='w-fit'
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
