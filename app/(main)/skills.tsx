import {
  SiGithub,
  SiGodotengine,
  SiAseprite,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiRust
} from '@icons-pack/react-simple-icons';
import { GlobeIcon, BrushIcon, FileQuestionIcon } from 'lucide-react';

const SkillsSession = () => {
  return (
    <section
      id='skills'
      className='flex flex-col gap-4 max-w-140 mx-8 @lg:mx-auto py-6 my-12'>
      <h2 className='text-lg @sm:text-2xl @[43rem]:text-4xl text-(--theme-color) font-medium'>Minhas Habilidades</h2>
      <i className='stext-subtle text-xs @[42rem]:text-base'>E tecnologias que uso</i>
      <div className='flex flex-wrap gap-6 justify-around'>
        <div className='panel hoverable'>
          <SiGithub size={40} />
          <h3>
            <strong>Git Version Control</strong>
          </h3>
          <i className='text-xs'>
            Tenho aprendido muito a utilizar o <strong>Git</strong> e o <strong>Github</strong> desde aproximadamente
            2023, e hoje em dia tenho aprendido a mexer mais a fundo com <strong>Continuous Integration</strong>.
          </i>
        </div>
        <div className='panel hoverable'>
          <SiGodotengine size={40} />
          <h3>
            <strong>Godot Engine</strong>
          </h3>
          <i className='text-xs'>
            Tive uma longa jornada no mundo de desenvolvimento de jogos. Mexi com <strong>Unity</strong>,{' '}
            <strong>GameMaker</strong> e finalmente cheguei na <strong>Godot</strong>, que hoje é minha engine favorita
          </i>
        </div>
        <div className='panel hoverable'>
          <GlobeIcon size={40} />
          <h3>
            <strong>Web Dev</strong>
          </h3>
          <i className='text-xs'>
            Na segunda metade de 2023, iniciei minha jornada no mundo de <strong>Web</strong> e desde então me encontrei
            na área de <strong>Front-End</strong>, mas raramente me aventuro com o <strong>Back-End</strong>
          </i>
        </div>
        <div className='panel hoverable'>
          <BrushIcon size={40} />
          <h3>
            <strong>Art / PixelArt</strong>
          </h3>
          <i className='text-xs'>
            Tive minhas aventuras com arte -- principalmente PixelArt -- ainda tenho muito a melhorar, mas a prática
            leva ao progresso!
          </i>
          <SiAseprite
            size={12}
            className='mx-auto'
          />
        </div>
      </div>
    </section>
  );
};

const LanguagesSession = () => {
  return (
    <section
      id='languages'
      className='flex flex-col gap-4 max-w-140 mx-8 @lg:mx-auto py-6 my-12'>
      <h2 className='text-lg @sm:text-2xl @[43rem]:text-4xl text-(--theme-color) font-medium'>
        Linguagens que Aprendi
      </h2>
      <i className='stext-subtle text-xs @[42rem]:text-base'>E algumas que ainda estou experimentando</i>
      <div className='flex flex-wrap gap-6 justify-around'>
        <div className='panel hoverable'>
          <SiPython size={40} />
          <h3>
            <strong>Clássico Python</strong>
          </h3>
          <i className='text-xs'>
            Python foi a primeira linguagem de programação que eu aprendi. Muito do que sei sobre programação eu aprendi
            com o Python
          </i>
        </div>
        <div className='panel hoverable'>
          <div className='inline-flex gap-4'>
            <SiJavascript size={40} />
            <SiTypescript size={40} />
          </div>
          <h3>
            <strong>Java/Typescript</strong>
          </h3>
          <i className='text-xs'>
            Não se pode deixar de falar delas, o par que move a internet a anos. Sempre irei preferir trabalhar com
            Typescript pois passei a apreciar "tipagem forte"
          </i>
        </div>
        <div className='panel hoverable'>
          <SiRust size={40} />
          <h3>
            <strong>Rust</strong>
          </h3>
          <i className='text-xs'>
            Ainda estou nos básicos de <strong>Rust</strong>, mas suas capacidades e a experiência de desenvolvimento me
            encantaram
          </i>
          <div className='mx-auto block'>🦀</div>
        </div>
        <div className='panel hoverable'>
          <FileQuestionIcon size={40} />
          <h3>
            <strong>???</strong>
          </h3>
          <i className='text-xs'>???</i>
        </div>
      </div>
    </section>
  );
};

export { SkillsSession, LanguagesSession };
