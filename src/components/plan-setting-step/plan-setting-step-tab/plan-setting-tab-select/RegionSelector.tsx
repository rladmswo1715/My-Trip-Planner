import Button from '@/components/common/Button';
import { regions } from '@/constants/regions';
import { usePlanStore } from '@/stores/planStores';
import React from 'react';

const RegionSelector = () => {
  const { selectedRegion, setRegion } = usePlanStore((state) => state.region);

  return (
    <div className="flex flex-wrap gap-[1.2rem]">
      {Object.keys(regions).map((region) => (
        <Button
          key={region}
          size="sm"
          btnColor="white"
          className={`border-none ${
            selectedRegion === region
              ? 'bg-blue-500 text-background'
              : 'bg-var-enable-300 text-var-enable-400'
          }`}
          onClick={() => setRegion(region)}
        >
          {region}
        </Button>
      ))}
    </div>
  );
};

export default RegionSelector;
