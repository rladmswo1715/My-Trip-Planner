'use client';

import React from 'react';
import PlanDayDetailCreateItem from './PlanDayDetailCreateItem';

type PlanDayDetailCreate = {
  planData: PlanDataType;
};

const PlanDayDetailCreate = ({ planData }: PlanDayDetailCreate) => {
  return (
    <section className="flex flex-col space-y-[6.8rem]">
      {planData.days.map((e) => (
        <PlanDayDetailCreateItem
          key={e.date}
          item={e}
          people={planData.people}
        />
      ))}
    </section>
  );
};

export default PlanDayDetailCreate;
