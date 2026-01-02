import Link from 'next/link';
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';
import { ButtonProps } from '../ui/button';
import { ToggleThemeButton } from '../ui/toggle-theme-button';
import { ChangeColorButton } from '../ui/change-color-button';

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
    url: '/#contact'
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
      <DropdownMenuContent className='mt-2'>
        {items.map(({ title, url }) => (
          <DropdownMenuItem
            key={title}
            variant='default'
            asChild>
            <Link href={url}>{title}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem asChild>
          <ToggleThemeButton size='default'>Mudar tema</ToggleThemeButton>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <ChangeColorButton
            variant='default'
            size='default'>
            Mudar Paleta
          </ChangeColorButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Sidebar, items as NavbarItems };
