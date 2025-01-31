import React from 'react';
import Button from '../common/Button';
import { usePlanStore } from '@/stores/planStores';

type StepType = {
  title: string;
};

const TransportSelectStep = ({ title }: StepType) => {
  const { setTransport, selectedTransport } = usePlanStore(
    (state) => state.transport
  );

  return (
    <div className="mt-[4rem]">
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
              교통수단
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
