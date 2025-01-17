import React, { SVGProps } from 'react';

type IconProps = { size?: number; color?: string } & SVGProps<SVGSVGElement>;

const BuildingIcon = ({
  size = 40,
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="20" fill="#EED2FF" />
      <path
        d="M17.6668 31.666V24.001M20.0002 18.8327H20.0118M20.0002 14.166H20.0118M22.3335 24.001V31.666M23.5002 24.666C22.4904 23.9087 21.2623 23.4993 20.0002 23.4993C18.738 23.4993 17.5099 23.9087 16.5002 24.666M24.6668 18.8327H24.6785M24.6668 14.166H24.6785M15.3335 18.8327H15.3452M15.3335 14.166H15.3452"
        stroke="#BF6FF0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.0001 8.33301H13.0001C11.7114 8.33301 10.6667 9.37768 10.6667 10.6663V29.333C10.6667 30.6217 11.7114 31.6663 13.0001 31.6663H27.0001C28.2887 31.6663 29.3334 30.6217 29.3334 29.333V10.6663C29.3334 9.37768 28.2887 8.33301 27.0001 8.33301Z"
        stroke="#BF6FF0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BuildingIcon;
