import { LoaderIcon } from 'lucide-react';

export const LoadingComponent = () => (
  <div className='absolute top-1/2 left-1/2 -translate-1/2 text-center text-6xl text-(--theme-color)'>
    <i className='nf nf-md-robot_confused'>
      <span className='sr-only'>Robô confuso</span>
    </i>
    <LoaderIcon
      size={40}
      className='mx-auto my-4 animate-spin'
    />
  </div>
);
