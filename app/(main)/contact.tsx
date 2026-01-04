import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SiGithub, SiItchdotio } from '@icons-pack/react-simple-icons';
import { MailIcon } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section
      id='contact'
      className='mx-8 my-12 flex max-w-140 flex-col gap-4 py-6 @lg:mx-auto'>
      <h2 className='text-lg font-medium text-(--theme-color) @sm:text-2xl @[43rem]:text-4xl'>
        <strong>Entre em Contato</strong>
      </h2>
      <div className='grid auto-cols-fr justify-around gap-4 @lg:grid-cols-2'>
        <Link
          href='mailto:kodii.tulip@gmail.com'
          target='_blank'
          className={cn(buttonVariants({ variant: 'link', className: 'sbg-overlay h-max p-4' }))}>
          <MailIcon size={20} />
          <p className='text-sm'>kodii.tulip@gmail.com</p>
        </Link>
        <Link
          href='https://github.com/kodiitulip'
          target='_blank'
          className={cn(buttonVariants({ variant: 'link', className: 'sbg-overlay h-max p-4' }))}>
          <SiGithub size={20} />
          <p className='text-sm'>github:kodiitulip</p>
        </Link>
        <Link
          href='https://kodiitulip.itch.io'
          target='_blank'
          className={cn(buttonVariants({ variant: 'link', className: 'sbg-overlay h-max p-4' }))}>
          <SiItchdotio size={20} />
          <p className='text-sm'>kodiitulip.itch.io</p>
        </Link>
      </div>
    </section>
  );
};

export { ContactSection };
