'use client';

import { ArrowUp } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ToggleThemeButton } from './toggle-theme-button';
import { ChangeColorButton } from './change-color-button';

const BackUpButton = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleScrollOffset = () => setVisible(window.pageYOffset >= 10);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollOffset, { passive: true });
    handleScrollOffset();
    return () => window.removeEventListener('scroll', handleScrollOffset);
  }, []);
  return (
    <div
      className={cn('sbg-plate fixed right-4 bottom-4 gap-2 p-1 md:right-8 md:bottom-8', visible ? 'flex' : 'hidden')}>
      <Button
        asChild
        size='icon-sm'>
        <Link href='#navbar'>
          <ArrowUp />
          <span className='sr-only'>Voltar para cima</span>
        </Link>
      </Button>
      <ToggleThemeButton
        size='icon-sm'
        variant='default'
      />
      <ChangeColorButton
        size='icon-sm'
        variant='default'
      />
    </div>
  );
};

export { BackUpButton };
