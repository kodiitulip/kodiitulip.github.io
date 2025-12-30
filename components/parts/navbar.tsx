import Link from 'next/link';
import { Button } from '../ui/button';
import { ToggleThemeButton } from '../ui/toggle-theme-button';
import { NavbarItems, Sidebar } from './sidebar';

const Navbar = () => {
  return (
    <nav
      id='navbar'
      className='pt-2.5 @container'>
      <div className='window-border my-0 flex gap-2 items-center accent-iris'>
        <p className='window-title'>Navbar</p>
        <strong className='flex-1'>Kodie</strong>

        <div className='hidden @[42rem]:flex gap-2 items-center'>
          {NavbarItems.map(({ title, url }) => (
            <Button
              key={title}
              variant='ghost'
              accentColor='iris'
              asChild>
              <Link href={url}>{title}</Link>
            </Button>
          ))}
          <ToggleThemeButton accentColor='iris' />
        </div>

        <Sidebar
          className='@[42rem]:hidden'
          accentColor='iris'
        />
      </div>
    </nav>
  );
};

export { Navbar };
