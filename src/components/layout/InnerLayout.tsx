import { ReactNode } from 'react';

interface InnerLayoutProps {
  children: ReactNode;
  className?: string;
}

const InnerLayout = ({ children, className = '' }: InnerLayoutProps) => {
  return (
    <div className={`w-full max-w-[132.8rem] px-[2.4rem] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default InnerLayout;
