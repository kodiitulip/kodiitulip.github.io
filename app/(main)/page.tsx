import { ContactSection } from './contact';
import { HeroSection } from './hero';
import { LanguagesSession, SkillsSession } from './skills';

const Home = () => {
  return (
    <div className='@container relative h-full'>
      <HeroSection />

      <SkillsSession />

      <LanguagesSession />

      <ContactSection />
    </div>
  );
};

export default Home;
