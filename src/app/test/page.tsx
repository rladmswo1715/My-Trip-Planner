'use client';
import Button from '@/components/common/Button';

import Modal from '@/components/common/Modal';
import PlanSetting from '@/components/PlanSetting';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const [aaa, setaaa] = useState(false);
  const router = useRouter();
  return (
    <div className="relative w-full">
      <Button
        size="md"
        onClick={() => {
          const data = localStorage.getItem('planData');
          if (!!data) {
            const { planId } = JSON.parse(data);
            if (window.confirm('작성중인 계획이있습니다 이동하시겠습니까?')) {
              return router.push(`plan/${planId}/create`);
            }
          }
          setaaa(!aaa);
        }}
      >
        {`${aaa}`}
      </Button>
      {aaa && (
        <Modal onClose={() => setaaa(!aaa)}>
          <PlanSetting />
        </Modal>
      )}
    </div>
  );
};

export default Page;
