import { cn } from '@/lib/utils';
import { LoaderIcon } from 'lucide-react';

export const LoadingComponent = ({ absolute }: { absolute?: true }) => (
  <div
    className={cn('text-center text-6xl text-(--theme-color)', absolute && 'absolute top-1/2 left-1/2 -translate-1/2')}>
    <i className='nf nf-md-robot_happy'>
      <span className='sr-only'>Robô Feliz aguardado a página carregar</span>
    </i>
    <LoaderIcon
      size={40}
      className='mx-auto my-4 animate-spin'
    />
  </div>
);
