import Tag from '@/components/common/Tag';
import { useFilterStore } from '@/stores/filterStores';
import { usePlanStore } from '@/stores/planStores';
import React from 'react';

interface PlanTagProps {
  isFilterType?: boolean;
}

const PlanTag = ({ isFilterType = false }: PlanTagProps) => {
  const planStore = usePlanStore((state) => state.region);
  const filterStore = useFilterStore((state) => state.region);

  const { selectedDetails, removeDetail } = isFilterType
    ? filterStore
    : planStore;

  return (
    <div className="relative flex flex-wrap gap-2 p-4">
      {selectedDetails.map((detail) => (
        <Tag
          key={detail}
          close
          color="blueWhite"
          onClick={() => removeDetail(detail)}
        >
          {detail}
        </Tag>
      ))}
    </div>
  );
};

export default PlanTag;
