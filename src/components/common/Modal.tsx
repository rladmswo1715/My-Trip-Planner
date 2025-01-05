'use client';

import useOutsideClick from '@/lib/hooks/useOutsideClick';
import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);

  useOutsideClick(ref, () => {
    onClose();
  });

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden'; // 뒷페이지 스크롤 락
    scrollY.current = window.scrollY;

    const previouslyFocusedElement = document.activeElement as HTMLElement;
    ref.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow; // 스크롤 원상복구
      window.scrollTo(0, scrollY.current);
      previouslyFocusedElement?.focus();
    };
  }, []);

  // 스크롤 원상복구 혹은 내부 스크롤이 안될때 주석제거
  // useEffect(() => {
  //   const modalElement = ref.current;
  //   const previouslyFocusedElement = document.activeElement as HTMLElement;
  //   ref.current?.focus();

  //   if (modalElement) {
  //     modalElement.classList.add('modal-entering');
  //     scrollY.current = window.scrollY;
  //     setTimeout(() => {
  //       modalElement.classList.remove('modal-entering');
  //       modalElement.classList.add('modal-opened');
  //     }, 50);
  //   }
  //   document.body.classList.add('modal-open');
  //   return () => {
  //     previouslyFocusedElement.focus();
  //     document.body.classList.remove('modal-open');
  //     window.scrollTo(0, scrollY.current);
  //   };
  // }, []);

  return (
    <section className="modal-background">
      <div className="modal" ref={ref} tabIndex={-1}>
        {children}
      </div>
    </section>
  );
};

export default Modal;
