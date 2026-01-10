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
import { Colors, GlobalThemeData, useGlobalTheme } from '@/store/use-theme';
import { parseJSON, setHTMLAttribute } from '@/lib/utils';

type Props = Omit<ButtonProps, 'onClick'>;

const ChangeColorButton = ({ variant = 'ghost', size = 'icon', children, ...props }: Props) => {
  const { color, setColor } = useGlobalTheme();

  useEffect(() => {
    const localTheme = parseJSON(localStorage.getItem('data-theme') ?? 'null') as GlobalThemeData | null;
    if (localTheme !== null) setHTMLAttribute('data-theme-color', localTheme['state']['color']);
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
