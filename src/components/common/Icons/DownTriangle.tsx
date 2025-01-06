import React, { SVGProps } from 'react';

type IconProps = { size?: number; color?: string } & SVGProps<SVGSVGElement>;

const DownTriangle = ({
  size = 28,
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.5 18L6 10H21L13.5 18Z" />
    </svg>
  );
};

export default DownTriangle;
