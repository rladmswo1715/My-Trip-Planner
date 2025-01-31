import { Dispatch, SetStateAction, useRef, useState } from 'react';
import useOutsideClick from '@/lib/hooks/useOutsideClick';
import Icons from './Icons';

const SORT_LIST = ['최신순', '조회순', '인기순'];

interface SortFilterDropdownProps {
  text: string;
  onSelect: Dispatch<SetStateAction<string>>;
}

const SortFilterDropdown = ({ text, onSelect }: SortFilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (item: string) => {
    if (onSelect) onSelect(item);
    setIsOpen(false);
  };

  return (
    <div
      ref={ref}
      className="relative overflow-visible max-w-[12rem] w-full"
      role="menu"
      aria-hidden={!isOpen}
      aria-label="Dropdown"
    >
      <button
        aria-pressed={isOpen}
        className="bg-background text-black rounded-[0.8rem] cursor-pointer py-[1.9rem] pr-0 pl-[2.4rem] leading-[2.6rem] text-[1.6rem] w-full"
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-between">
          {text}
          {isOpen ? <Icons.UpTriangle /> : <Icons.DownTriangle />}
        </div>
      </button>

      <div className="relative">
        {isOpen && (
          <ul
            className={`absolute left-0 shadow-lg z-50 overflow-visible max-h-[26.4rem]
               ${
                 isOpen && 'border-t border-black/10'
               } w-full bg-background rounded-b-[1.2rem] overflow-auto`}
          >
            {SORT_LIST.map((item) => (
              <li
                key={item}
                onClick={() => handleSelect(item)}
                className="hover:bg-var-primary-50 py-[2rem] pl-[2.4rem] text-[1.6rem] cursor-pointer bg-background"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortFilterDropdown;
