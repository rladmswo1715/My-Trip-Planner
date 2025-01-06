import React, { useEffect, useState } from 'react';

type ProgressBarType = {
  step: number;
};

const ProgressBar = ({ step }: ProgressBarType) => {
  const [stepWidth, setStepWidth] = useState(`0`);

  useEffect(() => {
    setStepWidth(`${(step / 3) * 100}%`);
  }, [step]);

  return (
    <div className="w-full h-[1.2rem] min-h-[1.2rem] bg-var-primary-50">
      <div
        className={'h-full bg-var-primary-300 transition-all duration-300'}
        style={{ width: stepWidth }}
      ></div>
    </div>
  );
};

export default ProgressBar;
