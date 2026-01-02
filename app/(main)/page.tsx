import { ContactSection } from './contact';
import { HeroSection } from './hero';
import { LanguagesSession, SkillsSession } from './skills';

const Home = () => {
  return (
    <div className='@container h-full'>
      <p className='window-title'>about</p>
      <HeroSection />

      <SkillsSession />

      <LanguagesSession />

      <ContactSection />
    </div>
  );
};

export default Home;
