'use client';

import { Moon, Sun } from 'lucide-react';
import { Button, ButtonProps } from './button';
import { useEffect } from 'react';
import { GlobalThemeData, useGlobalTheme } from '@/store/use-theme';
import { cssMatchMedia, parseJSON, setHTMLAttribute } from '@/lib/utils';

type Props = Omit<ButtonProps, 'onClick'>;

const ToggleThemeButton = ({ variant = 'ghost', size = 'icon', children, ...props }: Props) => {
  const { theme, toggleTheme, setTheme } = useGlobalTheme();

  useEffect(() => {
    const localTheme = parseJSON(localStorage.getItem('data-theme') ?? 'null') as GlobalThemeData | null;
    if (localTheme !== null) setHTMLAttribute('data-theme', localTheme['state']['theme']);
    else setTheme(cssMatchMedia('(prefers-color-scheme: light)') ? 'dawn' : 'moon');
  }, [theme, setTheme]);
  return (
    <Button
      {...props}
      variant={variant}
      size={size}
      onClick={toggleTheme}>
      {theme === 'dawn' ? <Sun size={24} /> : <Moon size={24} />}
      <span className='sr-only'>Toggle dark and light theme</span>
      {children}
    </Button>
  );
};

export { ToggleThemeButton };
