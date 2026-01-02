import Link from 'next/link';
import { Button } from '../ui/button';
import { ToggleThemeButton } from '../ui/toggle-theme-button';
import { Sidebar } from './sidebar';
import { ChangeColorButton } from '../ui/change-color-button';

const items = [
  {
    title: 'Home',
    url: '/#navbar'
  },
  {
    title: 'Projetos de Jogos',
    url: '/projects#games'
  },
  {
    title: 'Outros Projetos',
    url: '/projects#other'
  },
  {
    title: 'Contato',
    url: '/#contact'
  }
];

const Navbar = () => {
  return (
    <nav
      id='navbar'
      className='@container pt-2.5'>
      <div className='window-border my-0 flex items-center gap-2'>
        <p className='window-title'>nav</p>
        <i className='nf nf-md-robot_love' />
        <strong className='flex-1'>Kodie</strong>

        <div className='hidden items-center gap-2 @[42rem]:flex'>
          {items.map(({ title, url }) => (
            <Button
              key={title}
              variant='ghost'
              asChild>
              <Link href={url}>{title}</Link>
            </Button>
          ))}
          <ToggleThemeButton />
          <ChangeColorButton />
        </div>

        <Sidebar className='@[42rem]:hidden' />
      </div>
    </nav>
  );
};

export { Navbar, items as NavItems };
