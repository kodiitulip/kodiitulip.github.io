import Link from 'next/link';
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';
import { Button, ButtonProps } from '../ui/button';
import { ToggleThemeButton } from '../ui/toggle-theme-button';
import { ChangeColorButton } from '../ui/change-color-button';
import { NavItems } from './navbar';
import { Popover, PopoverTrigger } from '../ui/popover';
import { PopoverContent } from '@radix-ui/react-popover';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Sidebar = ({ ...props }: Omit<ButtonProps, 'onClick'>) => {
  const path = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button {...props}>
          <MenuIcon />
          <span className='sr-only'>Menu</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='window-border sbg-plate z-50 flex flex-col gap-3'>
        {NavItems.map(({ title, url, requiredPath }, idx) => (
          <Button
            key={`${title}-${idx}`}
            variant='default'
            onClick={() => setOpen(false)}
            asChild>
            <Link href={requiredPath && path !== requiredPath ? requiredPath + url : url}>{title}</Link>
          </Button>
        ))}
        <ToggleThemeButton
          variant='default'
          size='default'>
          Mudar tema
        </ToggleThemeButton>
        <ChangeColorButton
          variant='default'
          size='default'>
          Mudar Paleta
        </ChangeColorButton>
      </PopoverContent>
    </Popover>
  );
};

export const OldSidebar = ({ ...props }: Omit<ButtonProps, 'onClick'>) => {
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
