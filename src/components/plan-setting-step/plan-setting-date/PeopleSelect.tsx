import Chip from '@/components/common/Chip';
import Icons from '@/components/common/Icons';
import React, { Ref, useState } from 'react';
import { z } from 'zod';

type PeopleSelectProps = {
  state: boolean;
  handleOpenState: (e: 'start' | 'end' | 'numberOfPeople' | null) => void;
  people: number;
  title: string;
  isEditing: boolean;
  handleOnChangePeople: (e: string) => void;
  ref: Ref<HTMLDivElement>;
};
const peopleSchema = z
  .number()
  .min(1, '인원은 최소 1명 이상이어야 합니다.')
  .max(12, '인원은 최대 12명입니다.')
  .int('인원 수는 정수여야 합니다.');

const PeopleSelect = ({
  isEditing,
  state,
  handleOpenState,
  people,
  title,
  ref,
  handleOnChangePeople,
}: PeopleSelectProps) => {
  const [error, setError] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (e.target.value === '') {
      handleOnChangePeople('0'); // 사용자가 입력을 지울 수 있도록 0으로 설정
      setError(null);
      return;
    }
    const result = peopleSchema.safeParse(value);

    if (!result.success) {
      setError(result.error.errors[0].message); // 오류 메시지 설정
    } else {
      setError(null); // 오류 초기화
      handleOnChangePeople(e.target.value); // 유효한 값만 반영
    }
  };
  return (
    <div className="grow flex flex-col gap-[1.2rem]" ref={ref}>
      <span className="leading-[2.6rem] text-[2rem]">인원</span>
      <Chip
        state={state}
        onClick={() => handleOpenState('numberOfPeople')}
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
              onChange={handleChange}
              className="flex w-full h-full grow border-none focus:outline-none bg-transparent"
              autoFocus
            />
          </>
        )}
      </Chip>
      {error && <span className="text-red-500 text-[1.6rem]">{error}</span>}
    </div>
  );
};

export default PeopleSelect;
