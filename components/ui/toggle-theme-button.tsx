'use client';

import { Moon, Sun } from 'lucide-react';
import { Button, ButtonProps } from './button';
import { useEffect } from 'react';
import { useGlobalTheme } from '@/store/use-theme';

type Props = Omit<ButtonProps, 'onClick'>;

const ToggleThemeButton = ({ variant = 'ghost', size = 'icon', children, ...props }: Props) => {
  const { theme, toggleTheme, setTheme } = useGlobalTheme();

  useEffect(() => {
    try {
      const localTheme = JSON.parse(localStorage.getItem('data-theme') ?? '{}');
      if (localTheme['state']) document.documentElement.setAttribute('data-theme', localTheme['state']['theme']);
      else setTheme(window.matchMedia('(prefers-color-scheme: light)').matches ? 'dawn' : 'moon');
    } catch (err) {
      console.error(err);
    }
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
