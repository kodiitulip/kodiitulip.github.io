'use client';

import { useEffect } from 'react';
import { Button, ButtonProps } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from './dropdown-menu';
import { PaletteIcon } from 'lucide-react';
import { Colors, useGlobalTheme } from '@/store/use-theme';

type Props = Omit<ButtonProps, 'onClick'>;

const ChangeColorButton = ({ variant = 'ghost', size = 'icon', children, ...props }: Props) => {
  const { color, setColor } = useGlobalTheme();

  useEffect(() => {
    try {
      const localTheme = JSON.parse(localStorage.getItem('data-theme') ?? '{}');
      if (localTheme['state']) document.documentElement.setAttribute('data-theme-color', localTheme['state']['color']);
    } catch (err) {
      console.error(err);
    }
  }, [color]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          {...props}
          variant={variant}
          className='hover:stext-overlay text-(--theme-color)'
          size={size}>
          <PaletteIcon size={24} />
          <span className='sr-only'>Mude a paleta de cores</span>
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={color}
          className='flex flex-col gap-3'
          onValueChange={(value) => setColor(value as Colors | 'love')}>
          {['love', 'gold', 'rose', 'pine', 'foam', 'iris'].map((value) => (
            <DropdownMenuRadioItem
              value={value}
              key={value}
              variant='inverted'
              style={
                {
                  '--theme-color': `var(--color-${value})`
                } as React.CSSProperties
              }
              className='capitalize'>
              {value}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ChangeColorButton };
