import React from 'react';

import RegionSelector from './plan-setting-step-tab/plan-setting-tab-select/RegionSelector';
import DetailedSelector from './plan-setting-step-tab/plan-setting-tab-select/DetailedSelector';

type StepType = {
  title: string;
};

const RegionSelectStep = ({ title }: StepType) => {
  return (
    <div className="flex flex-col h-full justify-between gap-[2rem] relative">
      <div className="grow">
        <span className="leading-[4.2rem] text-[2.8rem] font-bold">
          {title}
        </span>
        <RegionSelector />
        <DetailedSelector />
      </div>
    </div>
  );
};

export default RegionSelectStep;
