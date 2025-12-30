import { Button } from '../ui/button';
import { ToggleThemeButton } from '../ui/toggle-theme-button';

const Navbar = () => {
  return (
    <nav
      id='navbar'
      className='pt-2.5'>
      <div className='window-border my-0 flex gap-2 items-center accent-iris'>
        <p className='window-title'>Navbar</p>
        <strong className='flex-1'>Kodie</strong>

        <Button
          variant='ghost'
          accentColor='iris'
          asChild>
          <a href='/#hero'>Home</a>
        </Button>
        <Button
          variant='ghost'
          accentColor='iris'>
          Projeto de Jogos
        </Button>
        <Button
          variant='ghost'
          accentColor='iris'>
          Outros Projetos
        </Button>
        <Button
          variant='ghost'
          accentColor='iris'>
          Button
        </Button>
        <ToggleThemeButton accentColor='iris' />
      </div>
    </nav>
  );
};

export { Navbar };
