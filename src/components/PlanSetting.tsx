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
    if (!startDay || !endDay) return;
    const planId = uuidv4();
    const regions = region.selectedDetails.toString();
    const day = calculateTripDuration({
      endDate: endDay!,
      startDate: startDay!,
    });
    const title = `${day?.nights}박 ${day?.days}일 여행`;
    const days = generateDays({ startDay, endDay });

    const initialPlanData = {
      title,
      subtitle: regions,
      startDate: startDay,
      endDate: endDay,
      category: [],
      people: numberOfPeople,
      days,
    };
    localStorage.setItem(
      'planData',
      JSON.stringify({ ...initialPlanData, planId })
    );
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
