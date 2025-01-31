import Button from '@/components/common/Button';
import Chip from '@/components/common/Chip';
import Icons from '@/components/common/Icons';
import Modal from '@/components/common/Modal';
import useOutsideClick from '@/lib/hooks/useOutsideClick';
import { usePlanContext } from '@/providers/contexts/PlanContext';
import { ADD_PLAN_TITLE } from '@/types/enum';
import React, { Ref, useRef, useState } from 'react';

const CostInput = ({
  costInputValue,
  handleCost,
  title,
  isEditing,
  handleOpen,
  ref,
}: {
  ref: Ref<HTMLDivElement>;
  isEditing: boolean;
  handleOpen: () => void;
  costInputValue: string;
  title: string;
  handleCost: (e: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-[1.2rem] mt-[2.8rem]" ref={ref}>
      <span className="leading-[2.6rem] text-[2rem]">비용</span>
      <Chip
        state={isEditing}
        onClick={handleOpen}
        search
        className={`${
          isEditing && 'border border-var-primary-500 rounded-b-none'
        } py-[2.4rem]`}
        aria-label="Open input"
        Icon={<>{isEditing || costInputValue ? '원' : ''}</>}
      >
        {!isEditing ? (
          costInputValue === '0' || costInputValue === '' ? (
            title
          ) : (
            `${costInputValue}`
          )
        ) : (
          <input
            type="text"
            value={costInputValue}
            onChange={(e) => handleCost(e.target.value)}
            className="flex w-full h-full grow border-none focus:outline-none bg-transparent"
            autoFocus
          />
        )}
      </Chip>
    </div>
  );
};

const CostComponent = ({
  onClose,
  day,
}: {
  day: number;
  onClose: () => void;
}) => {
  const [rawCostValue, setRawCostValue] = useState(0);
  const [costInputValue, setCostInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const { setPlanData } = usePlanContext();

  const ref = useRef(null);

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (!numericValue) return '';
    return parseInt(numericValue, 10).toLocaleString();
  };

  const handleCost = (e: string) => {
    const numericValue = e.replace(/[^0-9]/g, '');
    setRawCostValue(numericValue ? parseInt(numericValue, 10) : 0);
    setCostInputValue(formatCurrency(numericValue));
  };

  const buttonHandler = () => {
    setPlanData((prev) => ({
      ...prev,
      days: prev.days.map((d) =>
        d.day === day ? { ...d, cost: rawCostValue } : d
      ),
    }));
  };

  const handleOpen = () => {
    setIsEditing(true);
  };

  useOutsideClick(ref, () => {
    setIsEditing(false);
  });

  return (
    <section className="flex flex-col w-full h-full justify-between">
      <div className="flex justify-between w-full">
        <span className="leading-[4.2rem] text-[2.8rem] font-bold">
          {ADD_PLAN_TITLE.COST}
        </span>
        <div className="cursor-pointer" onClick={onClose}>
          <Icons.Close.CloseIcon size={28} />
        </div>
      </div>
      <div className="grow">
        <CostInput
          ref={ref}
          isEditing={isEditing}
          costInputValue={costInputValue}
          handleCost={handleCost}
          title="비용을 입력해주세요"
          handleOpen={handleOpen}
        />
      </div>
      <Button
        size="lg"
        btnColor="blue"
        className="text-white"
        onClick={buttonHandler}
      >
        완료
      </Button>
    </section>
  );
};

const CostAdd = ({ onClose, day }: { onClose: () => void; day: number }) => {
  return (
    <Modal onClose={onClose}>
      <CostComponent day={day} onClose={onClose} />
    </Modal>
  );
};

export default CostAdd;
