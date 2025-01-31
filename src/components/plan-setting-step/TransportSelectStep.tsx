import React from 'react';
import Button from '../common/Button';
import { usePlanStore } from '@/stores/planStores';
import { useFilterStore } from '@/stores/filterStores';
import cs from 'classnames';

type StepType = {
  title: string;
  isFilterType?: boolean;
};

const TransportSelectStep = ({ isFilterType = false, title }: StepType) => {
  const planStore = usePlanStore((state) => state.transport);
  const filterStore = useFilterStore((state) => state.transport);

  const { setTransport, selectedTransport } = isFilterType
    ? filterStore
    : planStore;

  return (
    <div className={cs({ 'mt-[4rem]': !isFilterType })}>
      <span className="leading-[4.2rem] text-[2.8rem] font-bold">{title}</span>
      <div className="w-full mt-[2.8rem]">
        <div className="flex justify-between gap-[2rem]">
          <div className="grow w-1/2">
            <Button
              size="md"
              className={`w-full font-medium text-[1.8rem] leading-[2.34rem] py-[1.8rem] ${
                selectedTransport !== 'PUBLIC'
                  ? 'bg-var-enable-300 text-var-enable-text'
                  : 'bg-var-primary-500'
              }`}
              onClick={() => setTransport('PUBLIC')}
            >
              대중교통
            </Button>
          </div>
          <div className="grow w-1/2">
            <Button
              size="md"
              className={`w-full bg-var-enable-300 font-medium text-[1.8rem] leading-[2.34rem] py-[1.8rem] ${
                selectedTransport !== 'CAR'
                  ? 'bg-var-enable-300 text-var-enable-text'
                  : 'bg-var-primary-500'
              }`}
              onClick={() => setTransport('CAR')}
            >
              자차
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportSelectStep;
