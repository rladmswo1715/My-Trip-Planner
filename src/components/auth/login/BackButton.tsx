'use client';
import Icons from '@/components/common/Icons';
import { useRouter } from 'next/navigation';
import React from 'react';

type BackButtonProps = {
  onClose?: () => void;
};

const BackButton = ({ onClose }: BackButtonProps) => {
  const router = useRouter();
  const onCloseHandler = () => {
    if (onClose) {
      return onClose();
    }
    return router.back();
  };
  return (
    <div className="flex items-end flex-col" onClick={onCloseHandler}>
      <div className="relative cursor-pointer group">
        <div className="absolute w-full h-full rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        <div className="relative z-10">
          <Icons.Close.CloseIcon size={36} color="#000" />
        </div>
      </div>
    </div>
  );
};

export default BackButton;
