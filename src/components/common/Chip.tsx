import React, { JSX } from 'react';
import Icons from './Icons';

type ChipProps = {
  children: JSX.Element | string;
  state: boolean;
  dropdown?: boolean;
  search?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Chip: React.FC<ChipProps> = ({
  dropdown = false,
  children,
  state = true,
  search = false,
  ...rest
}) => {
  const getChipColor = () => {
    switch (state) {
      case false:
        return search ? 'search-close' : 'chip-close';

      case true:
        return search ? 'search-open' : 'chip-open';
      default:
        break;
    }
  };
  return (
    <button
      aria-pressed={state}
      {...rest}
      className={`${dropdown ? 'chip-dropdown' : 'chip'} ${
        rest.className
      } ${getChipColor()}`}
    >
      <div
        className={`flex items-center  ${
          dropdown ? 'justify-between' : 'gap-[1rem]'
        }`}
      >
        <span className="text-inherit text-center">{children}</span>
        {search ? (
          <Icons.Search size={21} />
        ) : state ? (
          <Icons.UpTriangle />
        ) : (
          <Icons.DownTriangle />
        )}
      </div>
    </button>
  );
};

export default Chip;
