import { useFilterStore } from '@/stores/filterStores';
import Chip from '../common/Chip';
import Modal from '../common/Modal';
import SearchFilter from './SearchFilter';
import { useState } from 'react';

type TFilterCategory = 'region' | 'date' | 'transport';

const SearchFilterContainer = () => {
  const { confirmedFilter } = useFilterStore();
  const regionLength = confirmedFilter.selectedDetails.length;
  const [filterModal, setFilterModal] = useState<{
    isOpen: boolean;
    filterCategory: TFilterCategory | null;
  }>({
    isOpen: false,
    filterCategory: null,
  });

  const filterButtonClickHandler = (filterCategory: TFilterCategory) => {
    setFilterModal({
      isOpen: true,
      filterCategory,
    });
  };

  const modalCloseHandler = () => {
    setFilterModal((prev) => ({
      ...prev,
      isOpen: false,
      filterCategory: null,
    }));
  };

  const formattedRegionFilter = (): string => {
    if (regionLength > 1)
      return `${confirmedFilter.selectedDetails[0]} 외 ${regionLength - 1}`;
    else if (regionLength > 0) return confirmedFilter.selectedDetails[0];
    else return '지역';
  };

  const formattedTransportFilter = () => {
    const transport = confirmedFilter.selectedTransport;
    let renderText: string;

    switch (transport) {
      case 'car':
        renderText = '자차';
        break;
      case 'public':
        renderText = '대중교통';
        break;
      default:
        renderText = '교통수단';
    }
    return renderText;
  };

  const renderItem = [
    {
      renderText: formattedRegionFilter(),
      state: regionLength > 0,
      onClick: () => filterButtonClickHandler('region'),
    },
    {
      renderText: confirmedFilter.selectedDate
        ? confirmedFilter.selectedDate
        : '기간',
      state: !!confirmedFilter.selectedDate,
      onClick: () => filterButtonClickHandler('date'),
    },
    {
      renderText: formattedTransportFilter(),
      state: !!confirmedFilter.selectedTransport,
      onClick: () => filterButtonClickHandler('transport'),
    },
  ];

  return (
    <>
      <div className="flex gap-[1.6rem] justify-start">
        {renderItem.map((item) => {
          return (
            <div key={item.renderText}>
              <Chip state={item.state} type="button" onClick={item.onClick}>
                {item.renderText}
              </Chip>
            </div>
          );
        })}
      </div>
      {filterModal.isOpen && (
        <Modal onClose={modalCloseHandler}>
          <SearchFilter
            filterCategory={filterModal.filterCategory as TFilterCategory}
            onClose={modalCloseHandler}
          />
        </Modal>
      )}
    </>
  );
};

export default SearchFilterContainer;
