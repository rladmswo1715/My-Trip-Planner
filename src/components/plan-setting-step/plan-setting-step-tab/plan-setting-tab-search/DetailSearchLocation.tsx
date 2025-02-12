'use client';
import { useSearchPlaces } from '@/lib/hooks/queries/useSearchLocationQuery';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import Search from './Search';
import { formatAddressStore } from '@/utils/placeFormat';
import { usePlanStore } from '@/stores/planStores';
import SearchItems from './SearchItems';
import toast from 'react-hot-toast';

const DetailSearchLocation = () => {
  const [, setSelectedItem] = useState<PlaceDocument | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { data } = useQuery(
    useSearchPlaces(searchTerm, searchTerm.length >= 2)
  );
  // const { data } = useQuery(useSearchPlaces(searchTerm, searchTerm.length > 2));
  const { setSearchDetails, selectedDetails } = usePlanStore(
    (state) => state.region
  );

  const handleSelect = (item: PlaceDocument) => {
    setSelectedItem(item);
    setSearchTerm(item.address.address_name);

    const newDetail = formatAddressStore(item);

    const isDuplicate = selectedDetails.some((e) => {
      return (
        e.parent === newDetail.parent &&
        e.child === newDetail.child &&
        (e.grandChild === newDetail.grandChild ||
          (!e.grandChild && !newDetail.grandChild))
      );
    });
    if (isDuplicate) {
      return toast.error('동일한 장소가 있습니다');
    }

    setSearchDetails(newDetail);
  };

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);
  return (
    <Search<PlaceDocument>
      title="지역명 또는 장소를 입력해주세요"
      list={data?.documents as PlaceDocument[]}
      onSelect={handleSelect}
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      renderItem={(item, handleSelect) => (
        <SearchItems
          handleSelect={handleSelect}
          items={item}
          key={item.address_name}
        />
      )}
    />
  );
};

export default DetailSearchLocation;
