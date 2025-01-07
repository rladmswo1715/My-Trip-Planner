import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface InnerLayoutProps {
  children: ReactNode;
  className?: string;
}

const InnerLayout = ({ children, className = '' }: InnerLayoutProps) => {
  return (
    <div
      className={twMerge(
        'w-full max-w-[132.8rem] px-[2.4rem] mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export default InnerLayout;
