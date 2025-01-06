import Tag from '@/components/common/Tag';
import { useRegionStore } from '@/stores/planStores';
import React from 'react';

const PlanTag = () => {
  const selectedDetails = useRegionStore((state) => state.selectedDetails);
  const removeDetail = useRegionStore((state) => state.removeDetail);

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
