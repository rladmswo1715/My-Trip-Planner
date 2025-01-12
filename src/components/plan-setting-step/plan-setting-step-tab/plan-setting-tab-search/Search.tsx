import React, { useRef, useState } from 'react';
import useOutsideClick from '@/lib/hooks/useOutsideClick';
import Chip from '../../../common/Chip';
// import SearchItems from './SearchItems';
import Icons from '@/components/common/Icons';

// 제너릭 Props
type SearchProps<T> = {
  onSelect: (item: T) => void;
  onSearchChange: (term: string) => void;
  searchTerm: string;
  title: string;
  list: T[]; // 제너릭 타입의 리스트
  renderItem: (item: T, handleSelect: (item: T) => void) => React.ReactNode; // 리스트 항목 렌더링 함수
};

const Search = <T,>({
  list = [],
  title,
  onSelect,
  onSearchChange,
  searchTerm,
  renderItem,
}: SearchProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setIsOpen(false);
    setIsEditing(false);
  });

  const handleSelect = (item: T) => {
    if (onSelect) onSelect(item);
    setIsOpen(false);
  };

  const handleChipClick = () => {
    setIsEditing(true);
    setIsOpen(true);
  };

  return (
    <div ref={ref} className="dropdown" role="menu" aria-label="search">
      <Chip
        state={isOpen}
        onClick={handleChipClick}
        dropdown
        Icon={<Icons.Search size={21} />}
        search
        className={`${
          isOpen && 'border border-var-primary-500 rounded-b-none'
        }`}
        aria-label="Open input"
      >
        {!isEditing ? (
          searchTerm ? (
            searchTerm
          ) : (
            title
          )
        ) : (
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full border-none focus:outline-none bg-transparent grow"
            autoFocus
          />
        )}
      </Chip>

      <div className="relative">
        {isOpen &&
          (list.length === 0 ? (
            <></>
          ) : (
            <ul className="absolute max-h-[32rem] left-0 shadow-lg z-50 overflow-visible">
              {list?.map((item) => renderItem(item, handleSelect))}
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Search;
