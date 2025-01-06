import React from 'react';

type StepType = {
  title: string;
};

const RegionSelectStep = ({ title }: StepType) => {
  return <div>{title}</div>;
};

export default RegionSelectStep;
