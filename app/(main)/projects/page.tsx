import { Metadata } from 'next';
import { GamesSection } from './games';
import { OtherProjectsSection } from './other';
import { Suspense } from 'react';
import { LoadingComponent } from '@/components/parts/loading';
import { fetchItchIoPublishedGames } from './itch-metadata';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Projetos'
};

const Projects = () => {
  const gamesInfo = fetchItchIoPublishedGames();
  return (
    <>
      <h1 className='window-title'>projects</h1>
      <Suspense fallback={<LoadingComponent absolute />}>
        <GamesSection gamesInfo={gamesInfo} />
        <OtherProjectsSection />
      </Suspense>
    </>
  );
};

export default Projects;
