import { useFilterStore } from '@/stores/filterStores';
import Chip from '../common/Chip';
import Modal from '../common/Modal';
import SearchFilter from './SearchFilter';
import { useState } from 'react';

type TFilterCategory = 'region' | 'date' | 'transport';
type TRegionType = {
  parent: string;
  child: string;
};

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

  const formattedRegionFilter = (): string | TRegionType => {
    if (regionLength > 1)
      return `${confirmedFilter.selectedDetails[0].parent} > ${
        confirmedFilter.selectedDetails[0].child
      } 외 ${regionLength - 1}`;
    else if (regionLength > 0)
      return `${confirmedFilter.selectedDetails[0].parent} > ${confirmedFilter.selectedDetails[0].child}`;
    else return '지역';
  };

  const formattedDateFilter = () => {
    const selectedDate = confirmedFilter.selectedDate;
    const selectedPeople = confirmedFilter.selectedPeople;
    let renderText: string;

    if (selectedDate && selectedPeople > 0) {
      renderText = `${selectedDate} / ${selectedPeople}명`;
    } else if (selectedDate) {
      renderText = selectedDate;
    } else if (selectedPeople > 0) {
      renderText = `${selectedPeople}명`;
    } else {
      renderText = '기간 / 인원';
    }

    return renderText;
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
      renderText: formattedDateFilter(),
      state:
        !!confirmedFilter.selectedDate || confirmedFilter.selectedPeople > 0,
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
            <div key={item.renderText.toString()}>
              <Chip state={item.state} type="button" onClick={item.onClick}>
                {item.renderText as string}
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
