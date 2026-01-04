import {
  SiGodotengine,
  SiAseprite,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiRust,
  SiNixos,
  SiLua,
  SiOpenjdk,
  SiGit
} from '@icons-pack/react-simple-icons';
import { GlobeIcon, BrushIcon } from 'lucide-react';

const SkillsSession = () => (
  <section
    id='skills'
    className='mx-8 my-12 flex max-w-140 flex-col gap-4 py-6 @lg:mx-auto'>
    <h2 className='text-lg font-medium text-(--theme-color) @sm:text-2xl @[43rem]:text-4xl'>Minhas Habilidades</h2>
    <i className='stext-subtle text-xs @[42rem]:text-base'>E tecnologias que uso</i>
    <div className='flex flex-wrap justify-around gap-6'>
      <div className='square-panel hoverable'>
        <SiGit size={40} />
        <h3>
          <strong>Git Version Control</strong>
        </h3>
        <i className='text-xs'>
          Tenho aprendido muito a utilizar o <strong>Git</strong> e o <strong>Github</strong> desde aproximadamente
          2023, e hoje em dia tenho aprendido a mexer mais a fundo com <strong>Continuous Integration</strong>.
        </i>
      </div>
      <div className='square-panel hoverable'>
        <SiGodotengine size={40} />
        <h3>
          <strong>Godot Engine</strong>
        </h3>
        <i className='text-xs'>
          Tive uma longa jornada no mundo de desenvolvimento de jogos. Mexi com <strong>Unity</strong>,{' '}
          <strong>GameMaker</strong> e finalmente cheguei na <strong>Godot</strong>, que hoje é minha engine favorita
        </i>
      </div>
      <div className='square-panel hoverable'>
        <GlobeIcon size={40} />
        <h3>
          <strong>Web Dev</strong>
        </h3>
        <i className='text-xs'>
          Na segunda metade de 2023, iniciei minha jornada no mundo de <strong>Web</strong> e desde então me encontrei
          na área de <strong>Front-End</strong>, mas raramente me aventuro com o <strong>Back-End</strong>
        </i>
      </div>
      <div className='square-panel hoverable'>
        <BrushIcon size={40} />
        <h3>
          <strong>Art / PixelArt</strong>
        </h3>
        <i className='text-xs'>
          Tive minhas aventuras com arte -- principalmente PixelArt -- ainda tenho muito a melhorar, mas a prática leva
          ao progresso!
        </i>
        <SiAseprite
          size={12}
          className='mx-auto'
        />
      </div>
    </div>
  </section>
);

const LanguagesSession = () => (
  <section
    id='languages'
    className='mx-8 my-12 flex max-w-140 flex-col gap-4 py-6 @lg:mx-auto'>
    <h2 className='text-lg font-medium text-(--theme-color) @sm:text-2xl @[43rem]:text-4xl'>
      Linguagens de Programação
    </h2>
    <i className='stext-subtle text-xs @[42rem]:text-base'>
      As que sei bastante e algumas que ainda estou experimentando
    </i>
    <div className='flex flex-wrap justify-around gap-6'>
      <div className='square-panel hoverable'>
        <SiPython size={40} />
        <h3>
          <strong>Python</strong>
        </h3>
        <i className='text-xs'>
          Python foi a primeira linguagem de programação que eu aprendi. Muito do que sei sobre programação eu aprendi
          com o Python
        </i>
      </div>
      <div className='square-panel hoverable'>
        <div className='inline-flex gap-4'>
          <SiJavascript size={40} />
          <SiTypescript size={40} />
        </div>
        <h3>
          <strong>Java/Typescript</strong>
        </h3>
        <i className='text-xs'>
          As linguagens do mundo Web. Sempre irei preferir trabalhar com Typescript pois passei a apreciar &apos;Type
          Safety&apos;
        </i>
      </div>
      <div className='square-panel hoverable'>
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
      <div className='square-panel hoverable'>
        <SiOpenjdk size={42} />
        <h3>
          <strong>Java</strong>
        </h3>
        <i className='text-xs'>
          Um famoso jogo pelo nome de Minecraft e sua comunidade de desenvolvimento de Mods, me fez aprender um pouco de
          Java e Gradle
        </i>
      </div>
    </div>
    <p className='mt-2'>Menções Honrosas</p>
    <ul className='stext-subtle [&_li]:ml-4 [&_li]:flex [&_li]:items-center [&_li]:gap-4'>
      <li>
        <SiGodotengine size={16} />
        GdScript
      </li>
      <li>
        <SiNixos size={16} />
        Nix
      </li>
      <li>
        <SiLua size={16} />
        Lua
      </li>
      <li></li>
    </ul>
  </section>
);

export { SkillsSession, LanguagesSession };
