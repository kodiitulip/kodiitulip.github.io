import Link from 'next/link';
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';
import { ButtonProps } from '../ui/button';
import { ToggleThemeButton } from '../ui/toggle-theme-button';

const items = [
  {
    title: 'Home',
    url: '/#hero'
  },
  {
    title: 'Projetos de Jogos',
    url: '#'
  },
  {
    title: 'Outros Projetos',
    url: '#'
  },
  {
    title: 'Contato',
    url: '#'
  }
];

const Sidebar = ({ ...props }: Omit<ButtonProps, 'onClick'>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        size='icon-sm'
        {...props}>
        <MenuIcon />
        <span className='sr-only'>Menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='accent-iris mt-2'>
        {items.map(({ title, url }) => (
          <DropdownMenuItem
            key={title}
            asChild>
            <Link href={url}>{title}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem asChild>
          <ToggleThemeButton
            size='default'
            className='accent-iris'>
            Mudar tema
          </ToggleThemeButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Sidebar, items as NavbarItems };
