'use client';

import Image from 'next/image';
import { ICONS } from '@/constants/importImages';
import SearchFilterContainer from './SearchFilterContainer';

const SearchForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-[1.2rem]">
        <div className="relative flex w-full">
          <input
            className="grow px-[5.6rem] py-[1.8rem] text-[2rem] border border-var-primary-500 rounded-[10rem] focus:outline-none"
            placeholder="원하는 지역의 여행 일정을 검색해보세요."
          />
          <button
            type="submit"
            className="absolute left-8 top-1/2 transform -translate-y-1/2  w-[2.8rem] h-[2.8rem]"
          >
            <Image src={ICONS.iconSearch.src} alt={ICONS.iconSearch.alt} fill />
          </button>
        </div>
        <SearchFilterContainer />
      </form>
    </div>
  );
};

export default SearchForm;
