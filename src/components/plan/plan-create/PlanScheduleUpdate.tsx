'use client';
import Icons from '@/components/common/Icons';
import Modal from '@/components/common/Modal';
import PlanSetting from '@/components/PlanSetting';
import React, { useState } from 'react';

const PlanScheduleUpdate = ({
  planData: initialData,
}: {
  planData: PlanDataType;
}) => {
  const [settingOpen, setSettingOpen] = useState(false);
  return (
    <>
      <div className="cursor-pointer" onClick={() => setSettingOpen(true)}>
        <Icons.Setting />
      </div>
      {settingOpen && (
        <Modal onClose={() => setSettingOpen(false)}>
          <PlanSetting
            onClose={() => setSettingOpen(false)}
            update
            initialData={initialData}
          />
        </Modal>
      )}
    </>
  );
};

export default PlanScheduleUpdate;
