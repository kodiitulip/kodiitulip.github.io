import type { Metadata } from 'next';
import { ContactSection } from './contact';
import { HeroSection } from './hero';
import { LanguagesSession, SkillsSession } from './skills';

export const metadata: Metadata = {
  title: 'Portifolio'
};

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
