import React from 'react';

type StepType = {
  title: string;
};

const DateSelectStep = ({ title }: StepType) => {
  return <div>{title}</div>;
};

export default DateSelectStep;
