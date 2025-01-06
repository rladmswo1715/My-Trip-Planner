'use client';

import ProgressBar from './common/ProgressBar';
import RegionSelectStep from './plan-setting-step/RegionSelectStep';
import DateSelectStep from './plan-setting-step/DateSelectStep';
import TransportSelectStep from './plan-setting-step/TransportSelectStep';
import { usePlanStore, useRegionStore } from '@/stores/planStores';
import Button from './common/Button';
import PlanTag from './plan-setting-step/plan-setting-step-tab/TagList';

export enum StepTitles {
  REGION = '어디로 떠나고 싶으신가요?',
  DATE = '여행 정보를 입력해주세요',
  TRANSPORT = '어떤 교통수단을 이용하시나요?',
}

const PlanSetting = () => {
  const { step, nextStep } = usePlanStore();
  const { selectedDetails } = useRegionStore();
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
    <div className="flex flex-col w-full h-full">
      <ProgressBar step={step} />
      <section className="grow overflow-auto">{renderStep()}</section>
      <PlanTag />
      <Button
        size="lg"
        onClick={nextStep}
        btnColor="blue"
        disabled={step === 1 && selectedDetails.length === 0}
      >
        다음
      </Button>
    </div>
  );
};

export default PlanSetting;
