import Modal from '@/components/common/Modal';
import Search from '@/components/plan-setting-step/plan-setting-step-tab/plan-setting-tab-search/Search';
import { useSearchPlacesKeyword } from '@/lib/hooks/queries/useSearchKeywordQuery';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import SearchKeyWordItems from './RegionItem';
import { ADD_PLAN_TITLE } from '@/types/enum';
import Button from '@/components/common/Button';
import { usePlanContext } from '@/providers/contexts/PlanContext';
import Tag from '@/components/common/Tag';

const RegionComponent = ({ day }: { day: number }) => {
  const [selectItems, setSelectItems] = useState<KeyWordDocument[] | []>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { planData, setPlanData } = usePlanContext();
  const { data } = useQuery({
    ...useSearchPlacesKeyword(searchTerm, searchTerm.length >= 2),
  });
  const handleSelect = (item: KeyWordDocument) => {
    setSearchTerm(item.place_name);
    setSelectItems((prev) => [...prev, item]);
  };
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleRemoveTag = (id: string) => {
    setSelectItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSetPlanData = () => {
    const updatedDays = planData.days.map((dayData) => {
      if (dayData.day === day) {
        return {
          ...dayData,
          detail: [
            ...dayData.detail,
            ...selectItems.map((item, index) => ({
              order: dayData.detail.length + index + 1,
              place: item.place_name,
              streetAddress: item.address_name,
              latitude: parseFloat(item.y),
              longitude: parseFloat(item.x),
              categoryName: item.category_name,
            })),
          ],
        };
      }
      return dayData;
    });

    setPlanData({
      ...planData,
      days: updatedDays,
    });
    setSelectItems([]);
  };
  return (
    <section className="flex flex-col w-full h-full justify-between">
      <span className="leading-[4.2rem] text-[2.8rem] font-bold">
        {ADD_PLAN_TITLE.REGION}
      </span>
      <div className="mt-[2.8rem] grow">
        <Search
          onSelect={handleSelect}
          onSearchChange={handleSearchChange}
          title="지역명 또는 장소를 입력해주세요"
          list={data?.documents as KeyWordDocument[]}
          searchTerm={searchTerm}
          renderItem={(item, handleSelect) => (
            <SearchKeyWordItems
              key={item.id}
              handleSelect={handleSelect}
              items={item}
            />
          )}
        />
      </div>
      <div className="relative">
        <div className="absolute bottom-0 w-full bg-opacity-5 backdrop-blur-sm">
          <div className="relative flex flex-wrap gap-2 p-4">
            {selectItems.map((detail) => (
              <Tag
                key={detail.address_name}
                close
                color="blueWhite"
                onClick={() => handleRemoveTag(detail.id)}
              >
                {detail.place_name}
              </Tag>
            ))}
          </div>
        </div>
      </div>
      <Button
        size="lg"
        onClick={() => handleSetPlanData()}
        btnColor="blue"
        className="text-white"
        disabled={selectItems.length === 0}
      >
        {selectItems.length !== 0 ? selectItems.length + '개 추가' : '추가'}
      </Button>
    </section>
  );
};

const RegionAdd = ({ onClose, day }: { onClose: () => void; day: number }) => {
  return (
    <Modal onClose={() => onClose()}>
      <RegionComponent day={day} />
    </Modal>
  );
};

export default RegionAdd;
