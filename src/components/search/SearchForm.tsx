'use client';

import Image from 'next/image';
import SearchFilterContainer from './SearchFilterContainer';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ICONS } from '@/constants/importImages';
import { useFilterStore } from '@/stores/filterStores';
import { getDaysFromDateFilter } from '@/utils/dateUtils';
import { useResetFiltersOnRouteChange } from '@/lib/hooks/useResetFilters';

const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { confirmedFilter } = useFilterStore();
  const [searchText, setSearchText] = useState(
    searchParams.get('keyword') || ''
  );

  useResetFiltersOnRouteChange();

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();

    const paramRegion = confirmedFilter.selectedDetails;
    const paramDate = confirmedFilter.selectedDate;
    const paramPeople = confirmedFilter.selectedPeople;
    const paramTransport = confirmedFilter.selectedTransport;

    const appendParam = (key: string, value: string | undefined) => {
      if (value) params.append(key, value);
    };

    paramRegion?.forEach((region) => {
      const mainRegion = region.parent;
      const subRegion = region.child;

      if (subRegion.includes('전체')) {
        appendParam('categoryNames', `${mainRegion}-0`);
      } else {
        appendParam('categoryNames', `${subRegion}-1`);
      }
    });

    const day = paramDate
      ? (getDaysFromDateFilter(paramDate) as string)
      : undefined;
    appendParam('day', day);

    if (paramPeople !== undefined && paramPeople > 0) {
      appendParam('people', paramPeople.toString());
    }

    appendParam('transportCategoryName', paramTransport?.toUpperCase());
    appendParam('keyword', searchText.trim());

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form className="flex flex-col gap-[1.2rem]" onSubmit={handleSearch}>
      <div className="relative flex w-full">
        <input
          className="grow px-[5.6rem] py-[1.8rem] text-[2rem] border border-var-primary-500 rounded-[10rem] focus:outline-none"
          placeholder="원하는 지역의 여행 일정을 검색해보세요."
          value={searchText}
          onChange={handleChangeText}
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
  );
};

export default SearchForm;
