import React, { JSX } from 'react';

type ButtonProps = {
  children: JSX.Element | string;
  Icon: JSX.Element;
  state: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Chip: React.FC<ButtonProps> = ({
  Icon,
  children,
  state = true,
  ...rest
}) => {
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
      <div className="flex gap-[1rem]">
        <span className="text-inherit">{children}</span>
        {Icon}
      </div>
    </button>
  );
};

export default Chip;
