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
import { calculateTripDuration, generateDays } from '@/utils/dateUtils';
import { STEP_TITLE } from '@/types/enum';

const PlanSetting = ({ onClose }: { onClose: () => void }) => {
  const {
    step,
    nextStep,
    region,
    date,
    transport,
    resetAll,
    resetStep,
    prevStep,
  } = usePlanStore();
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
    if (!startDay || !endDay) return;
    const planId = uuidv4();
    const subtitle = region.selectedDetails
      .map((item) => item.child)
      .join(' - ');
    const day = calculateTripDuration({
      endDate: endDay!,
      startDate: startDay!,
    });
    const title = `${day?.nights}박 ${day?.days}일 여행`;
    const days = generateDays({ startDay, endDay });

    const initialPlanData = {
      title,
      subtitle,
      startDate: startDay,
      endDate: endDay,
      category: region.selectedDetails,
      people: numberOfPeople,
      days,
    };
    localStorage.setItem(
      'planData',
      JSON.stringify({ ...initialPlanData, planId })
    );
    onClose();
    router.push(`/plan/${planId}/create`);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return {
          render: <RegionSelectStep title={STEP_TITLE.REGION} />,
          button: selectedDetails.length === 0,
          onClick: nextStep,
        };
      case 2:
        return {
          render: <DateSelectStep title={STEP_TITLE.DATE} />,
          button: !startDay || !endDay || numberOfPeople <= 0,
          onClick: nextStep,
        };
      case 3:
        return {
          render: <TransportSelectStep title={STEP_TITLE.TRANSPORT} />,
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
      <div className="flex w-full gap-[2rem]">
        {step === 1 ? (
          <Button
            size="lg"
            onClick={onClose}
            btnColor="white"
            className="grow text-var-primary-500"
          >
            취소
          </Button>
        ) : (
          <Button size="lg" onClick={prevStep} btnColor="blue" className="grow">
            이전
          </Button>
        )}
        <Button
          size="lg"
          className="grow"
          onClick={renderStep().onClick}
          btnColor="blue"
          disabled={renderStep().button}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default PlanSetting;
