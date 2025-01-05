'use client';
import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown';
import Modal from '@/components/common/Modal';
import React, { useState } from 'react';

const Page = () => {
  const [aaa, setaaa] = useState(false);
  const handleSelect = (item: string) => {
    console.log('선택된 항목:', item);
  };
  return (
    <div className="relative w-full">
      <Button size="md" onClick={() => setaaa(!aaa)}>
        {`${aaa}`}
      </Button>
      {aaa && (
        <Modal onClose={() => setaaa(!aaa)}>
          <div className="w-[20rem]">
            <Dropdown
              list={[
                '1박2일',
                '2박3일',
                '3박4일',
                '4박5일',
                '5박6일',
                '6박7일',
              ]}
              title="선택"
              onSelect={(e) => handleSelect(e)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Page;
