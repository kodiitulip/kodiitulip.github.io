import { Metadata } from 'next';
import { GamesSection } from './games';
import { OtherProjectsSection } from './other';
import { Suspense } from 'react';
import { LoadingComponent } from '@/components/parts/loading';

export const metadata: Metadata = {
  title: 'Kodie Sales | Projetos'
};

const Projects = () => {
  return (
    <>
      <h1 className='window-title'>projects</h1>
      {/* <LoadingComponent /> */}
      <Suspense fallback={<LoadingComponent />}>
        <GamesSection />
        <OtherProjectsSection />
      </Suspense>
    </>
  );
};

export default Projects;
