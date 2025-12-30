'use client';

import { ArrowUp } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const BackUpButton = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleScrollOffset = () => {
    const offset = window.pageYOffset;
    setVisible(offset >= 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollOffset, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollOffset);
  }, []);
  return (
    <Button
      asChild
      size='icon-sm'
      className={cn('fixed right-10 bottom-10', !visible && 'hidden')}>
      <a href='#navbar'>
        <ArrowUp />
        <span className='sr-only'>Voltar para cima</span>
      </a>
    </Button>
  );
};

export { BackUpButton };
