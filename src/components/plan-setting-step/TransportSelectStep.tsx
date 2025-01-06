import React from 'react';

type StepType = {
  title: string;
};

const TransportSelectStep = ({ title }: StepType) => {
  return <div>{title}</div>;
};

export default TransportSelectStep;
