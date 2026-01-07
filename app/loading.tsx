import { LoaderIcon } from 'lucide-react';

const Loading = () => (
  <div className='flex h-full items-center justify-center text-(--theme-color)'>
    <LoaderIcon
      size={40}
      className='animate-spin'
    />
  </div>
);

export default Loading;
