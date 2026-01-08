'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { ToggleThemeButton } from '../ui/toggle-theme-button';
import { Sidebar } from './sidebar';
import { ChangeColorButton } from '../ui/change-color-button';
import { usePathname } from 'next/navigation';

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
    url: '#contact',
    requiredPath: '/'
  }
];

const Navbar = () => {
  const path = usePathname();

  return (
    <nav
      id='navbar'
      className='@container pt-2.5'>
      <div className='window-border my-0 flex items-center gap-2'>
        <p className='window-right-title'>nav</p>
        <p className='window-title'>user</p>
        <div className='flex flex-1 items-center text-(--theme-color)'>
          <i className='nf nf-md-robot_love mr-2 leading-2.5' />
          <strong>Kodie</strong>
        </div>

        <div className='hidden items-center gap-2 @[42rem]:flex'>
          {items.map(({ title, url, requiredPath }) => (
            <Button
              key={title}
              variant='ghost'
              asChild>
              <Link href={requiredPath && path !== requiredPath ? requiredPath + url : url}>{title}</Link>
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
