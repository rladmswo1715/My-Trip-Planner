'use client';

import ProgressBar from './common/ProgressBar';
import RegionSelectStep from './plan-setting-step/RegionSelectStep';
import DateSelectStep from './plan-setting-step/DateSelectStep';
import TransportSelectStep from './plan-setting-step/TransportSelectStep';
import {
  useDateStore,
  usePlanStore,
  useRegionStore,
} from '@/stores/planStores';
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
  const { endDay, startDay, numberOfPeople } = useDateStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return {
          render: <RegionSelectStep title={StepTitles.REGION} />,
          button: selectedDetails.length === 0,
        };
      case 2:
        return {
          render: <DateSelectStep title={StepTitles.DATE} />,
          button: !startDay || !endDay || numberOfPeople <= 0,
        };
      case 3:
        return {
          render: <TransportSelectStep title={StepTitles.TRANSPORT} />,
          button: selectedDetails.length === 0,
        };
      default:
        return {};
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <ProgressBar step={step} />
      <section className="grow">{renderStep().render}</section>
      {step === 1 && (
        <div className="relative">
          <div className="absolute bottom-0 w-full bg-opacity-5 backdrop-blur-sm">
            <PlanTag />
          </div>
        </div>
      )}
      <Button
        size="lg"
        onClick={nextStep}
        btnColor="blue"
        disabled={renderStep().button}
      >
        다음
      </Button>
    </div>
  );
};

export default PlanSetting;
