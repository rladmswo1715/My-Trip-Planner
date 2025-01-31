import React, { useRef, useState } from 'react';
import useOutsideClick from '@/lib/hooks/useOutsideClick';
import Chip from './Chip';

type DropdownProps = {
  onSelect?: (item: string) => void;
  title: string;
  list: string[];
};

const Dropdown = ({ list, title, onSelect }: DropdownProps) => {
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
        className={`${
          isOpen && 'border border-var-primary-500 rounded-b-none'
        }`}
        aria-label="Close dropdown"
      >
        {title}
      </Chip>
      <div className="relative">
        {isOpen && (
          <ul className="absolute left-0 shadow-lg z-50 overflow-visible max-h-[26.4rem]">
            {list.map((e) => (
              <li
                key={e}
                onClick={() => handleSelect(e)}
                className="hover:bg-var-primary-50 py-[2rem] pl-[2.4rem]"
              >
                {e}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
