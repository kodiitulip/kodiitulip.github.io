import { ContactSection } from './contact';
import { HeroSection } from './hero';
import { LanguagesSession, SkillsSession } from './skills';

const Home = () => {
  return (
    <>
      <p className='window-title'>about</p>
      <HeroSection />

      <SkillsSession />

      <LanguagesSession />

      <ContactSection />
    </>
  );
};

export default Home;
