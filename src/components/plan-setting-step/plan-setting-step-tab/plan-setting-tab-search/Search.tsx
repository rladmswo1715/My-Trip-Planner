import React, { useRef, useState } from 'react';
import useOutsideClick from '@/lib/hooks/useOutsideClick';
import Chip from '../../../common/Chip';
import SearchItems from './SearchItems';
import Icons from '@/components/common/Icons';

type SearchProps = {
  onSelect: (item: PlaceDocument) => void;
  onSearchChange: (term: string) => void;
  searchTerm: string;
  title: string;
  list: PlaceDocument[] | [];
};

const Search = ({
  list = [],
  title,
  onSelect,
  onSearchChange,
  searchTerm,
}: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setIsOpen(false);
    setIsEditing(false);
  });

  const handleSelect = (item: PlaceDocument) => {
    if (onSelect) onSelect(item);
    setIsOpen(false);
  };

  const handleChipClick = () => {
    setIsEditing(true);
    setIsOpen(true);
  };

  return (
    <div
      ref={ref}
      className="dropdown"
      role="menu"
      // aria-hidden={!isOpen}
      aria-label="search"
    >
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
            className="w-full border-none focus:outline-none bg-transparent"
            autoFocus
          />
        )}
      </Chip>

      <div className="relative">
        {isOpen &&
          (list.length === 0 ? (
            <></>
          ) : (
            <ul className="absolute left-0 shadow-lg z-50 overflow-visible">
              {list?.map((e) => (
                <SearchItems
                  handleSelect={handleSelect}
                  items={e}
                  key={e.address_name}
                />
              ))}
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Search;
