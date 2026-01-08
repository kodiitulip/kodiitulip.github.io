import { Button } from '@/components/ui/button';
import { SiGithub, SiItchdotio } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import Link from 'next/link';
import { getGamesMetadata } from './itch-metadata';

const games = [
  {
    itchIoPage: 'https://kodiitulip.itch.io/frozen-inferno',
    sourceCodePage: 'https://github.com/kodiitulip/frozen-inferno',
    platforms: {
      web: true,
      windows: true,
      linux: true,
      android: false,
      mac: false
    }
  },
  {
    itchIoPage: 'https://kodiitulip.itch.io/windy-seas',
    sourceCodePage: 'https://github.com/kodiitulip/windy-seas',
    platforms: {
      web: true,
      windows: true,
      linux: true,
      android: false,
      mac: false
    }
  },
  {
    itchIoPage: 'https://kodiitulip.itch.io/specters-case',
    sourceCodePage: 'https://github.com/kodiitulip/specters-case',
    platforms: {
      web: true,
      windows: true,
      linux: true,
      android: false,
      mac: false
    }
  },
  {
    itchIoPage: 'https://kodiitulip.itch.io/gestalt-game',
    sourceCodePage: 'https://github.com/kodiitulip/gestalt-game',
    platforms: {
      web: true,
      windows: true,
      linux: true,
      android: false,
      mac: false
    }
  },
  {
    itchIoPage: 'https://kodiitulip.itch.io/sphinxs-gold',
    sourceCodePage: 'https://github.com/kodiitulip/ouro-da-esfinge',
    platforms: {
      web: true,
      windows: true,
      linux: true,
      android: true,
      mac: false
    }
  }
];

export const GamesSection = async () => {
  const gamesMetadatas = await getGamesMetadata(games);

  return (
    <section
      id='games'
      className='mx-8 my-12 flex max-w-140 flex-col gap-4 py-6 @lg:mx-auto @xl:max-w-5xl'>
      <h2 className='text-lg font-medium text-(--theme-color) @sm:text-2xl @[43rem]:text-4xl'>Jogos</h2>
      <i className='stext-subtle text-xs @[42rem]:text-base'>
        Aqui deixo amostra meus projetos de jogos que chegaram a um estado jogável
      </i>

      <div className='flex w-full flex-wrap justify-around gap-x-4 gap-y-12'>
        {gamesMetadatas.map(({ gameId, title, gamePage, coverImage, sourceCodePage, platforms }) => (
          <div
            key={`${gameId}`}
            className='sbg-overlay w-full max-w-120'>
            <h3 className='my-2 text-center text-lg text-(--theme-color)'>
              <strong>{title}</strong>
            </h3>
            <div className='relative aspect-video w-full'>
              <Image
                src={coverImage}
                alt={`Banner de um jogo chamado ${title}`}
                fill
                className='object-contain'
              />
            </div>
            <div className='mt-4 flex justify-center'>
              {platforms.web && (
                <i className='nf nf-dev-html5 mx-2'>
                  <span className='sr-only'>HTML5</span>
                </i>
              )}
              {platforms.linux && (
                <i className='nf nf-dev-linux mx-2'>
                  <span className='sr-only'>LINUX</span>
                </i>
              )}
              {platforms.windows && (
                <i className='nf nf-dev-windows mx-2'>
                  <span className='sr-only'>WINDOWS</span>
                </i>
              )}
              {platforms.mac && (
                <i className='nf nf-dev-apple mx-2'>
                  <span className='sr-only'>MAC/APPLE</span>
                </i>
              )}
              {platforms.android && (
                <i className='nf nf-dev-android mx-2'>
                  <span className='sr-only'>ANDROID</span>
                </i>
              )}
            </div>
            <div className='panel flex-col justify-between md:flex-row'>
              <Button
                variant='link'
                className='w-fit'
                asChild>
                <Link
                  href={gamePage}
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
