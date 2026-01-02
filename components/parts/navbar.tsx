import Link from 'next/link';
import { Button } from '../ui/button';
import { ToggleThemeButton } from '../ui/toggle-theme-button';
import { NavbarItems, Sidebar } from './sidebar';
import { ChangeColorButton } from '../ui/change-color-button';

const Navbar = () => {
  return (
    <nav
      id='navbar'
      className='@container pt-2.5'>
      <div className='window-border my-0 flex items-center gap-2'>
        <p className='window-title'>Navbar</p>
        <i className='nf nf-md-robot_love' />
        <strong className='flex-1'>Kodie</strong>

        <div className='hidden items-center gap-2 @[42rem]:flex'>
          {NavbarItems.map(({ title, url }) => (
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

export { Navbar };
