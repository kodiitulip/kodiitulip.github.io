import { HeroSection } from './hero';
import { LanguagesSession, SkillsSession } from './skills';

const Home = () => {
  return (
    <div className='@container h-full relative'>
      <HeroSection />

      <SkillsSession />

      <LanguagesSession />
    </div>
  );
};

export default Home;
