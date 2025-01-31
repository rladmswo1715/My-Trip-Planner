'use client';
import useCreatePlan from '@/lib/hooks/queries/mutate/useCreatePlan';
import useExitPrompt from '@/lib/hooks/useExitprompt';
import { PlanSchema } from '@/types/schema/planSchema';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type PlanContextType = {
  planData: PlanDataType;
  setPlanData: React.Dispatch<React.SetStateAction<PlanDataType>>;
  image: {
    image: File | null;
    setImage: React.Dispatch<React.SetStateAction<File | null>>;
  };
  handleSubmit: () => Promise<void>;
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
  transportation: '',
  days: [],
};
export const PlanProvider: React.FC<{
  children: React.ReactNode;
  initialData?: PlanDataType;
}> = ({ children, initialData }) => {
  const [planData, setPlanData] = useState<PlanDataType>(initialDatas);
  const [image, setImage] = useState<File | null>(null);
  const { setIsEditing } = useExitPrompt();
  const router = useRouter();
  const { mutate } = useCreatePlan({
    formData: { planData, image },
    queryKeyType: ['plans'],
    callbackFn: () => router.push('/'),
  });
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

  const handleSubmit = async () => {
    const validationResult = PlanSchema.safeParse(planData);

    if (!validationResult.success) {
      toast.error(
        validationResult.error.issues[0]?.message || '유효성 검증 실패'
      );
      return;
    }

    mutate(); // 실행
  };

  return (
    <PlanContext
      value={{
        planData,
        setPlanData,
        image: {
          image,
          setImage,
        },
        handleSubmit,
      }}
    >
      {children}
    </PlanContext>
  );
};

export const usePlanContext = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error('컨텍스트에러.');
  }
  return context;
};
