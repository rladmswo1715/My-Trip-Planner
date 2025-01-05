import React, { JSX } from 'react';
import Icons from './Icons';

type TagProps = {
  children: JSX.Element | string;
  close: boolean;
  color: 'blue' | 'black' | 'blackWhite' | 'blueWhite';
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLDivElement>;

const Tag: React.FC<TagProps> = ({
  onClick,
  close,
  color,
  children,
  ...rest
}) => {
  const getTagStyle = () => {
    switch (color) {
      case 'black':
        return 'bg-foreground text-background';
      case 'blue':
        return 'bg-var-primary-500 text-white';
      case 'blueWhite':
        return 'text-var-primary-500 bg-background border-var-primary-500 border py-[calc(1.05rem-1px)]';
      case 'blackWhite':
        return 'text-foreground bg-background border-foreground border py-[calc(1.05rem-1px)]';
      default:
        return 'bg-gray-200 text-black';
    }
  };

  return (
    <div
      {...rest}
      className={`tag ${getTagStyle()} ${rest.className} ${
        close && 'pr-[1.6rem]'
      } `}
    >
      <div className="flex gap-[1rem] items-center">
        {children}

        {close && (
          <div onClick={onClick} className="cursor-pointer">
            <Icons.Close size={16} />
            {/* <Image src={ICONS.iconClose.src} alt={ICONS.iconClose.alt} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tag;
