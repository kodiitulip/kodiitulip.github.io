import { Metadata } from 'next';
import { GamesSection } from './games';

export const metadata: Metadata = {
  title: 'Kodie Sales | Projetos'
};

const Projects = () => {
  return (
    <div className='@container h-full'>
      <p className='window-title'>projects</p>
      <GamesSection />
    </div>
  );
};

export default Projects;
