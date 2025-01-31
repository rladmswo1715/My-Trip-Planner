'use client';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return <Toaster position="top-center" containerClassName="text-[1.6rem]" />;
};

export default ToastProvider;
