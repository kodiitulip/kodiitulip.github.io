import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: 'sbg-overlay hover:stext-surface hover:bg-(--accent) focus-visible:bg-(--accent)',
        ghost: 'accent-overlay hover:bg-(--accent) focus-visible:bg-(--accent)',
        link: 'accent-text underline-offset-4 hover:underline hover:text-(--accent) focus-visible:underline focus-visible:text-(--accent)',
        outline:
          'sborder-overlay accent-high focus-visible:border-(--accent) focus-visible:stext-surface focus-visible:bg-(--accent) hover:border-(--accent) hover:stext-surface hover:bg-(--accent) border-2'
      },
      size: {
        'default': 'h-9 px-4 py-2 has-[>svg]:px-3',
        'sm': 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        'lg': 'h-10 px-6 has-[>svg]:px-4',
        'icon': 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10'
      },
      accentColor: {
        default: '',
        love: 'accent-love hover:not-data-[variant=link]:stext-overlay focus-visible:not-data-[variant=link]:stext-overlay',
        gold: 'accent-gold hover:not-data-[variant=link]:stext-overlay focus-visible:not-data-[variant=link]:stext-overlay',
        rose: 'accent-rose hover:not-data-[variant=link]:stext-overlay focus-visible:not-data-[variant=link]:stext-overlay',
        pine: 'accent-pine hover:not-data-[variant=link]:stext-overlay focus-visible:not-data-[variant=link]:stext-overlay',
        foam: 'accent-foam hover:not-data-[variant=link]:stext-overlay focus-visible:not-data-[variant=link]:stext-overlay',
        iris: 'accent-iris hover:not-data-[variant=link]:stext-overlay focus-visible:not-data-[variant=link]:stext-overlay'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      accentColor: 'default'
    }
  }
);

type ButtonProps = React.ComponentProps<'button'>
  & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant = 'default',
  size = 'default',
  accentColor = 'default',
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      data-size={size}
      data-accent-color={accentColor}
      className={cn(buttonVariants({ variant, size, accentColor, className }))}
      {...props}
    />
  );
}

export { Button, type ButtonProps, buttonVariants };
