'use client';
import useExitPrompt from '@/lib/hooks/useExitprompt';
import React, { createContext, useContext, useEffect, useState } from 'react';
type PlanContextType = {
  planData: PlanDataType;
  setPlanData: React.Dispatch<React.SetStateAction<PlanDataType>>;
};
export const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);

const initialDatas = {
  title: '',
  subtitle: '',
  startDate: '',
  endDate: '',
  category: [],
  people: 0,
  days: [],
};
export const PlanProvider: React.FC<{
  children: React.ReactNode;
  initialData?: PlanDataType;
}> = ({ children, initialData }) => {
  const [planData, setPlanData] = useState<PlanDataType>(initialDatas);

  const { setIsEditing } = useExitPrompt();

  useEffect(() => {
    setIsEditing(true);

    if (!!initialData) {
      setPlanData(initialData);
    } else {
      const storedData = localStorage.getItem('planData');
      if (storedData) {
        setPlanData(JSON.parse(storedData));
      }
    }
  }, [initialData, setIsEditing]);

  return (
    <PlanContext value={{ planData, setPlanData }}>{children}</PlanContext>
  );
};

export const usePlanContext = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error('context에러.');
  }
  return context;
};
