import React, { useCallback, useRef, useState } from 'react';
import StartSelect from './plan-setting-date/StartSelect';
import EndSelect from './plan-setting-date/EndSelect';
import PeopleSelect from './plan-setting-date/PeopleSelect';
import useOutsideClick from '@/lib/hooks/useOutsideClick';
import { usePlanStore } from '@/stores/planStores';

type StepType = {
  title: string;
};

const DateSelectStep = ({ title }: StepType) => {
  const [openState, setOpenState] = useState<
    'start' | 'end' | 'numberOfPeople' | null
  >(null);
  const [isEditing, setIsEditing] = useState(false);
  const { setNumberOfPeople: setPeople, numberOfPeople: people } = usePlanStore(
    (state) => state.date
  );
  const peopleRef = useRef(null);

  const handleSearchChange = useCallback(
    (term: string) => {
      setPeople(Number(term));
    },
    [setPeople]
  );
  const handleOpenState = (state: 'start' | 'end' | 'numberOfPeople') => {
    if (state === 'numberOfPeople') {
      setIsEditing(true);
    }
    setOpenState(state);
  };

  useOutsideClick(peopleRef, () => {
    setIsEditing(false);
    setOpenState(null);
  });

  return (
    <div className="flex flex-col h-full justify-between gap-[2rem] relative w-full">
      <div>
        {/* 제목탭 */}
        <div className="mt-[4rem]">
          <span className="leading-[4.2rem] text-[2.8rem] font-bold">
            {title}
          </span>
        </div>

        <div className="w-full mt-[2.8rem]">
          <div className="flex justify-between gap-[2rem]">
            <StartSelect />
            <EndSelect />
          </div>
        </div>
        <div className="w-full mt-[2.8rem]">
          <PeopleSelect
            ref={peopleRef}
            people={people}
            state={openState === 'numberOfPeople'}
            title="0명"
            handleOnChangePeople={handleSearchChange}
            isEditing={isEditing}
            handleOpenState={() => handleOpenState('numberOfPeople')}
          />
        </div>

        {/* 랜더 */}
      </div>
    </div>
  );
};

export default DateSelectStep;
