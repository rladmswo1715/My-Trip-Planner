'use client';
import Button from '@/components/common/Button';

import Modal from '@/components/common/Modal';
import PlanSetting from '@/components/PlanSetting';
import React, { useState } from 'react';

const Page = () => {
  const [aaa, setaaa] = useState(false);

  return (
    <div className="relative w-full">
      <Button size="md" onClick={() => setaaa(!aaa)}>
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
