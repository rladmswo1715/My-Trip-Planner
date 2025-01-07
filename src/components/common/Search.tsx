import React, { useRef, useState } from 'react';
import useOutsideClick from '@/lib/hooks/useOutsideClick';
import Chip from './Chip';
import Icons from './Icons';

type SearchProps = {
  onSelect?: (item: string) => void;
  title: string;
  list: string[];
};

const Search = ({ list, title, onSelect }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen((prev) => !prev); // 토글 기능
  const handleSelect = (item: string) => {
    if (onSelect) onSelect(item);
    setIsOpen(false);
  };

  return (
    <div
      ref={ref}
      className="dropdown"
      role="menu"
      aria-hidden={!isOpen}
      aria-label="Dropdown"
    >
      <Chip
        state={isOpen}
        onClick={toggleDropdown}
        dropdown
        search
        className={`${
          isOpen && 'border border-var-primary-500 rounded-b-none'
        }`}
        aria-label="Close dropdown"
      >
        {title}
      </Chip>
      <div className="relative">
        {isOpen && (
          <ul className="absolute left-0 shadow-lg z-50 overflow-visible">
            {list.map((e) => (
              <li
                key={e}
                onClick={() => handleSelect(e)}
                className="hover:bg-var-primary-50 flex justify-between text-[2rem] leading-[2.6rem] py-[2.1rem] pl-[2.4rem] pr-[1.6rem]"
              >
                <span className="text-inherit">{e}</span>
                <Icons.Search />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
