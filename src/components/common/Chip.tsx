import React, { JSX } from 'react';
import Icons from './Icons';

type ChipProps = {
  children: JSX.Element | string;
  state: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Chip: React.FC<ChipProps> = ({ children, state = true, ...rest }) => {
  const getChipColor = () => {
    switch (state) {
      case false:
        return 'chip-close';

      case true:
        return 'chip-open';
      default:
        break;
    }
  };
  return (
    <button
      aria-pressed={state}
      {...rest}
      className={`chip ${rest.className} ${getChipColor()}`}
    >
      <div className="flex gap-[1rem] items-center">
        <span className="text-inherit text-center">{children}</span>
        {state ? <Icons.UpTriangle /> : <Icons.DownTriangle />}
      </div>
    </button>
  );
};

export default Chip;
