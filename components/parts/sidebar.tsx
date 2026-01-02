import Link from 'next/link';
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';
import { ButtonProps } from '../ui/button';
import { ToggleThemeButton } from '../ui/toggle-theme-button';
import { ChangeColorButton } from '../ui/change-color-button';
import { NavItems } from './navbar';

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
        {NavItems.map(({ title, url }) => (
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

export { Sidebar };
