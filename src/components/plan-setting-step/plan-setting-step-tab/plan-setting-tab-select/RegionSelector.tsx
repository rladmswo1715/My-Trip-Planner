import Button from '@/components/common/Button';
import { regions } from '@/constants/regions';
import { useFilterStore } from '@/stores/filterStores';
import { usePlanStore } from '@/stores/planStores';
import React from 'react';

interface RegionSelectorProps {
  isFilterType?: boolean;
}

const RegionSelector = ({ isFilterType = false }: RegionSelectorProps) => {
  const planStore = usePlanStore((state) => state.region);
  const filterStore = useFilterStore((state) => state.region);

  const { selectedRegion, setRegion } = isFilterType ? filterStore : planStore;

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
