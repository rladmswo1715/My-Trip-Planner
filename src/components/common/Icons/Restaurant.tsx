import React, { SVGProps } from 'react';

type IconProps = { size?: number; color?: string } & SVGProps<SVGSVGElement>;

const RestaurantIcon = ({
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
      <rect width="40" height="40" rx="20" fill="#D4FFD2" />
      <path
        d="M14.75 31.6663V20.9913C13.7583 20.7191 12.9273 20.1747 12.2568 19.358C11.5864 18.5413 11.2508 17.5886 11.25 16.4997V8.33301H13.5833V16.4997H14.75V8.33301H17.0833V16.4997H18.25V8.33301H20.5833V16.4997C20.5833 17.5886 20.2481 18.5413 19.5777 19.358C18.9072 20.1747 18.0758 20.7191 17.0833 20.9913V31.6663H14.75ZM26.4167 31.6663V22.333H22.9167V14.1663C22.9167 12.5525 23.4856 11.177 24.6235 10.0398C25.7614 8.90273 27.1369 8.33379 28.75 8.33301V31.6663H26.4167Z"
        fill="#65D35F"
      />
    </svg>
  );
};

export default RestaurantIcon;
