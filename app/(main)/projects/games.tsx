import { Button } from '@/components/ui/button';
import { SiGithub, SiItchdotio } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import Link from 'next/link';
import { fetchItchIoPublishedGames } from './itch-metadata';

export const GamesSection = async () => {
  const gamesMetadatas = await fetchItchIoPublishedGames();

  return (
    <section
      id='games'
      className='mx-8 my-12 flex max-w-140 flex-col gap-4 py-6 @lg:mx-auto @xl:max-w-5xl'>
      <h2 className='text-lg font-medium text-(--theme-color) @sm:text-2xl @[43rem]:text-4xl'>Jogos</h2>
      <i className='stext-subtle text-xs @[42rem]:text-base'>
        Aqui deixo amostra meus projetos de jogos que chegaram a um estado jogável
      </i>

      <div className='flex w-full flex-wrap justify-around gap-x-4 gap-y-12'>
        {gamesMetadatas.map(
          ({ id, title, url, cover_url, short_text, source_code, p_android, p_linux, p_osx, p_windows, type }) => (
            <div
              key={id}
              className='sbg-overlay w-full max-w-120'>
              <h3 className='my-2 text-center text-lg text-(--theme-color)'>
                <strong>{title}</strong>
              </h3>
              <div className='relative aspect-video w-full'>
                <Image
                  src={cover_url}
                  alt={`Banner de um jogo chamado ${title}`}
                  fill
                  className='object-contain'
                />
              </div>
              <div className='mt-4 flex justify-center'>
                {type === 'html' && (
                  <i className='nf nf-dev-html5 mx-2'>
                    <span className='sr-only'>HTML5</span>
                  </i>
                )}
                {p_linux && (
                  <i className='nf nf-dev-linux mx-2'>
                    <span className='sr-only'>LINUX</span>
                  </i>
                )}
                {p_windows && (
                  <i className='nf nf-dev-windows mx-2'>
                    <span className='sr-only'>WINDOWS</span>
                  </i>
                )}
                {p_osx && (
                  <i className='nf nf-dev-apple mx-2'>
                    <span className='sr-only'>MAC/APPLE</span>
                  </i>
                )}
                {p_android && (
                  <i className='nf nf-dev-android mx-2'>
                    <span className='sr-only'>ANDROID</span>
                  </i>
                )}
              </div>
              <i className='stext-subtle line-clamp-2 max-h-16 overflow-hidden p-4 pb-0'>{short_text}</i>
              <div className='panel flex-col justify-between md:flex-row'>
                <Button
                  variant='link'
                  className='w-fit'
                  asChild>
                  <Link
                    href={url}
                    target='_blank'>
                    <SiItchdotio size={16} /> Página Itch.io
                  </Link>
                </Button>
                <Button
                  variant='link'
                  className='w-fit'
                  asChild>
                  <Link
                    href={source_code}
                    target='_blank'>
                    <SiGithub size={16} /> Código Fonte
                  </Link>
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
