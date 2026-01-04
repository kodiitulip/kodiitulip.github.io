'use client';

import { useEffect, useState } from 'react';
import { Button, ButtonProps } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from './dropdown-menu';
import { PaletteIcon } from 'lucide-react';

type Props = Omit<ButtonProps, 'onClick'>;
type Colors = 'love' | 'gold' | 'rose' | 'pine' | 'foam' | 'iris';

const ChangeColorButton = ({ variant = 'ghost', size = 'icon', children, ...props }: Props) => {
  const [selectedColor, setSelectedColor] = useState<Colors>('iris');

  useEffect(() => {
    const initColor = () => {
      const oldColor = localStorage.getItem('data-theme-color') as Colors | null;
      if (oldColor === null) applyThemeColor('iris');
      else if (oldColor) {
        applyThemeColor(oldColor);
        setSelectedColor(oldColor);
      }
    };

    initColor();
  }, []);

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
          value={selectedColor}
          className='flex flex-col gap-3'
          onValueChange={(value) => setSelectedColor(applyThemeColor(value as Colors))}>
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

const applyThemeColor = (color: Colors) => {
  document.documentElement.setAttribute('data-theme-color', color);
  localStorage.setItem('data-theme-color', color);
  return color;
};

export { ChangeColorButton };
