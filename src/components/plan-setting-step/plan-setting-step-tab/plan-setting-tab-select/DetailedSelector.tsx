import Button from '@/components/common/Button';
import { regions } from '@/constants/regions';
import { usePlanStore } from '@/stores/planStores';
import React from 'react';

const DetailedSelector = () => {
  const { selectedRegion, selectedDetails, toggleDetail } = usePlanStore(
    (state) => state.region
  );

  if (!selectedRegion || !regions[selectedRegion]) return null;
  return (
    <div className="flex flex-col my-[4rem] relative gap-[2rem]">
      <span className="text-[2rem] leading-[3rem] font-semibold">상세선택</span>
      <div className="flex flex-wrap gap-[1.2rem] gap-y-[2rem]">
        {regions[selectedRegion].map((e) => (
          <Button
            key={e}
            size="sm"
            btnColor="white"
            className={`border-none ${
              selectedDetails.some(
                (item) => item.parent === selectedRegion && item.child === e
              )
                ? 'bg-blue-500 text-background'
                : 'bg-var-enable-300 text-var-enable-400'
            }`}
            onClick={() => toggleDetail(e)}
          >
            {e}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DetailedSelector;
