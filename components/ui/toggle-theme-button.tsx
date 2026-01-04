'use client';

import { Moon, Sun } from 'lucide-react';
import { Button, ButtonProps } from './button';
import { useEffect, useState } from 'react';

type Props = Omit<ButtonProps, 'onClick'>;

const ToggleThemeButton = ({ variant = 'ghost', size = 'icon', children, ...props }: Props) => {
  const [theme, setTheme] = useState<'dawn' | 'default'>('default');

  useEffect(() => {
    const initialTheme = () => {
      const newTheme = localStorage.getItem('data-theme')
        ? (localStorage.getItem('data-theme') as 'dawn' | 'default')
        : window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'dawn'
          : 'default';
      setTheme(applyTheme(newTheme));
    };

    initialTheme();
  }, []);
  return (
    <Button
      {...props}
      variant={variant}
      size={size}
      onClick={() => setTheme((prev) => applyTheme(prev === 'dawn' ? 'default' : 'dawn'))}>
      {theme === 'dawn' ? <Sun size={24} /> : <Moon size={24} />}
      <span className='sr-only'>Toggle dark and light theme</span>
      {children}
    </Button>
  );
};

const applyTheme = (theme: 'dawn' | 'default') => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('data-theme', theme);
  return theme;
};

export { ToggleThemeButton };
