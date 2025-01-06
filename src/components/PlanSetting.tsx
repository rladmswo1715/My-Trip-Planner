'use client';

import { usePlanStore } from '@/stores/planStores';
import ProgressBar from './common/ProgressBar';
import RegionSelectStep from './plan-setting-step/RegionSelectStep';
import DateSelectStep from './plan-setting-step/DateSelectStep';
import TransportSelectStep from './plan-setting-step/TransportSelectStep';
import Button from './common/Button';

export enum StepTitles {
  REGION = '지역 선택',
  DATE = '날짜 선택',
  TRANSPORT = '교통수단 선택',
}

const PlanSetting = () => {
  const { step } = usePlanStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <RegionSelectStep title={StepTitles.REGION} />;
      case 2:
        return <DateSelectStep title={StepTitles.DATE} />;
      case 3:
        return <TransportSelectStep title={StepTitles.TRANSPORT} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-between space-y-[2rem]">
      <ProgressBar step={step} />
      <section className="grow">{renderStep()}</section>
      <Button size="lg" btnColor="blue">
        다음
      </Button>
    </div>
  );
};

export default PlanSetting;
