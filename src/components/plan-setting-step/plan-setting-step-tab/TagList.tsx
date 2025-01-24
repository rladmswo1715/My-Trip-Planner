import Tag from '@/components/common/Tag';
import { usePlanStore } from '@/stores/planStores';
import React from 'react';

const PlanTag = () => {
  const { selectedDetails, removeDetail } = usePlanStore(
    (state) => state.region
  );

  return (
    <div className="relative flex flex-wrap gap-2 p-4">
      {selectedDetails.map(({ parent, child }) => (
        <Tag
          key={`${parent}-${child}`}
          close
          color="blueWhite"
          onClick={() => removeDetail({ parent, child })}
        >
          {parent + ' > ' + child}
        </Tag>
      ))}
    </div>
  );
};

export default PlanTag;
