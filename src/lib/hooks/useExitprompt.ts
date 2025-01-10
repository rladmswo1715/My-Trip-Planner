'use client';

import { useState, useEffect } from 'react';

const useExitPrompt = () => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isEditing) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    const handlePopState = () => {
      if (isEditing) {
        const shouldLeave = confirm(
          '작성 중인 내용이 있습니다. 페이지를 나가시겠습니까?'
        );
        if (!shouldLeave) {
          // 뒤로 가기를 막고 현재 URL 유지
          window.history.pushState(null, '', window.location.href);
        } else {
          setIsEditing(false); // 확인한 경우 상태 초기화
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isEditing]);

  return { isEditing, setIsEditing };
};

export default useExitPrompt;
