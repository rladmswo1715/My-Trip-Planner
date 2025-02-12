'use client';
import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const StaticModal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    if (typeof document !== undefined) {
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
    }
  }, []);
  const modalContent = (
    <section className="modal-background ">
      <div className="modal-login" ref={ref} tabIndex={-1}>
        {children}
      </div>
    </section>
  );
  const portalRoot = document.getElementById('modal-portal');
  return portalRoot ? createPortal(modalContent, portalRoot) : null;
};

export default StaticModal;
