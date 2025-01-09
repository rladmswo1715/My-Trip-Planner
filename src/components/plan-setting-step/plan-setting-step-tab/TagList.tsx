import Tag from '@/components/common/Tag';
import { usePlanStore } from '@/stores/planStores';
import React from 'react';

const PlanTag = () => {
  const { selectedDetails, removeDetail } = usePlanStore(
    (state) => state.region
  );

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
