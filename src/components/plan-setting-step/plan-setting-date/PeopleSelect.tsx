import Chip from '@/components/common/Chip';
import Icons from '@/components/common/Icons';
import React, { Ref } from 'react';

type PeopleSelectProps = {
  state: boolean;
  handleOpenState: (e: 'start' | 'end' | 'numberOfPeople' | null) => void;
  people: number;
  title: string;
  isEditing: boolean;
  handleOnChangePeople: (e: string) => void;
  ref: Ref<HTMLDivElement>;
  isFilterType?: boolean;
};

const PeopleSelect = ({
  isEditing,
  state,
  handleOpenState,
  people,
  title,
  ref,
  handleOnChangePeople,
  isFilterType = false,
}: PeopleSelectProps) => {
  const handleClick = () => {
    if (isFilterType) {
      handleOpenState(null);
    } else {
      handleOpenState('numberOfPeople');
    }
  };

  return (
    <div className="grow flex flex-col gap-[1.2rem]" ref={ref}>
      <span className="leading-[2.6rem] text-[2rem]">인원</span>
      <Chip
        state={state}
        onClick={handleClick}
        // onClick={() => setIsEditing(true)}
        Icon={<Icons.People />}
        search
        className={`${
          state && 'border border-var-primary-500 rounded-b-none'
        } py-[2.4rem]`}
        aria-label="Open input"
      >
        {!isEditing ? (
          people === 0 ? (
            `${title}`
          ) : (
            `${people} 명`
          )
        ) : (
          <>
            <input
              type="number"
              value={`${people}`}
              onChange={(e) => handleOnChangePeople(e.target.value)}
              className="flex w-full h-full grow border-none focus:outline-none bg-transparent"
              autoFocus
            />
          </>
        )}
      </Chip>
    </div>
  );
};

export default PeopleSelect;
