import { MouseEventHandler } from 'react';

interface SlideCustomButtonProps {
  direction: 'left' | 'right';
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SlideCustomButton = ({ direction, onClick }: SlideCustomButtonProps) => {
  const styled = `absolute top-1/2 w-[28px] h-[28px] bg-cover bg-no-repeat transform -translate-y-1/2 ${
    direction === 'left'
      ? `left-[-1.6rem] bg-[url('/slideLeft.svg')]`
      : `right-[-1.6rem] bg-[url('/slideRight.svg')]`
  }`;
  return <button className={styled} onClick={onClick} />;
};

export default SlideCustomButton;
