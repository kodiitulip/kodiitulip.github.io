import { Metadata } from 'next';
import { GamesSection } from './games';
import { OtherProjectsSection } from './other';

export const metadata: Metadata = {
  title: 'Kodie Sales | Projetos'
};

const Projects = () => {
  return (
    <div className='@container h-full'>
      <p className='window-title'>projects</p>
      <GamesSection />
      <OtherProjectsSection />
    </div>
  );
};

export default Projects;
