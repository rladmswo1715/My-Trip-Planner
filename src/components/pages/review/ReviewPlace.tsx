import React, { useState } from 'react';
import Search from '@/components/plan-setting-step/plan-setting-step-tab/plan-setting-tab-search/Search';
import useSearchReviewPlace from '@/lib/hooks/queries/mutate/useSearchReviewPlace';
import SearchKeyWordItems from '@/components/plan/plan-create/modal/RegionItemForGoogleMap';

const ReviewPlace = () => {
  const [selectedItem, setSelectedItem] = useState<GooglePlaceAPIType | null>(
    null
  );
  const {
    searchText,
    dataList,
    handleSearchChange,
    setSearchText,
    setDataList,
  } = useSearchReviewPlace();

  const handleSelect = (item: GooglePlaceAPIType) => {
    setSearchText(item.structured_formatting.main_text);
    setSelectedItem(item);
    setDataList([]);
  };

  return (
    <div className="mt-[2.8rem] grow">
      <Search
        onSelect={handleSelect}
        onSearchChange={handleSearchChange}
        title="지역명 또는 장소를 입력해주세요"
        list={dataList}
        searchTerm={searchText}
        renderItem={(item, handleSelect) => (
          <SearchKeyWordItems
            key={item.place_id}
            handleSelect={handleSelect}
            items={item}
          />
        )}
      />
    </div>
  );
};

export default ReviewPlace;
