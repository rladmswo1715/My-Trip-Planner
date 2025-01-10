'use client';
import { useSearchPlaces } from '@/lib/hooks/queries/useSearchLocationQuery';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import Search from './Search';
import { formatAddressName } from '@/utils/placeFormat';
import { usePlanStore } from '@/stores/planStores';

const DetailSearchLocation = () => {
  const [, setSelectedItem] = useState<PlaceDocument | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { data } = useQuery({
    ...useSearchPlaces(searchTerm, searchTerm.length >= 2),
  });
  // const { data } = useQuery(useSearchPlaces(searchTerm, searchTerm.length > 2));
  const { setSelectDetails } = usePlanStore((state) => state.region);

  const handleSelect = (item: PlaceDocument) => {
    setSelectedItem(item);
    setSearchTerm(item.address.address_name);
    setSelectDetails(formatAddressName(item));
  };

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);
  return (
    <div>
      <Search
        title={'지역명 또는 장소를 입력해주세요'}
        list={data?.documents as PlaceDocument[]}
        onSelect={handleSelect}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
};

export default DetailSearchLocation;
