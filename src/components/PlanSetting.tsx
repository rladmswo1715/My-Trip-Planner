'use client';

import ProgressBar from './common/ProgressBar';
import RegionSelectStep from './plan-setting-step/RegionSelectStep';
import DateSelectStep from './plan-setting-step/DateSelectStep';
import TransportSelectStep from './plan-setting-step/TransportSelectStep';
import Button from './common/Button';
import PlanTag from './plan-setting-step/plan-setting-step-tab/TagList';
import { usePlanStore } from '@/stores/planStores';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { calculateTripDuration } from '@/utils/dateUtils';
export enum StepTitles {
  REGION = '어디로 떠나고 싶으신가요?',
  DATE = '여행 정보를 입력해주세요',
  TRANSPORT = '어떤 교통수단을 이용하시나요?',
}

const PlanSetting = () => {
  const { step, nextStep, region, date, transport, resetAll, resetStep } =
    usePlanStore();
  const { selectedDetails } = region;
  const { endDay, startDay, numberOfPeople } = date;
  const router = useRouter();

  useEffect(() => {
    return () => {
      resetAll();
      resetStep();
    };
  }, []);

  const lastBtnSetting = () => {
    const planId = uuidv4();
    const regions = region.selectedDetails.toString();
    const day = calculateTripDuration({
      endDate: endDay!,
      startDate: startDay!,
    });
    const title = `${day?.nights}박 ${day?.days}일 여행`;

    const initialPlanData = {
      title,
      subtitle: regions,
      startDate: startDay,
      endDate: endDay,
      category: [],
      people: numberOfPeople,
      days: [],
    };
    localStorage.setItem(
      'planData',
      JSON.stringify({ ...initialPlanData, planId })
    );
    router.push(`/plan/${planId}/create?setup=ture`);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return {
          render: <RegionSelectStep title={StepTitles.REGION} />,
          button: selectedDetails.length === 0,
          onClick: nextStep,
        };
      case 2:
        return {
          render: <DateSelectStep title={StepTitles.DATE} />,
          button: !startDay || !endDay || numberOfPeople <= 0,
          onClick: nextStep,
        };
      case 3:
        return {
          render: <TransportSelectStep title={StepTitles.TRANSPORT} />,
          button: transport.selectedTransport === null,
          onClick: lastBtnSetting,
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
        onClick={renderStep().onClick}
        btnColor="blue"
        disabled={renderStep().button}
      >
        다음
      </Button>
    </div>
  );
};

export default PlanSetting;
