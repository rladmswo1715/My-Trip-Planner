import Icons from '@/components/common/Icons';
import { formatAddressName } from '@/utils/placeFormat';
import React from 'react';

type SearchItemProps = {
  items: PlaceDocument;
  handleSelect: (items: PlaceDocument) => void;
};

const SearchItems = ({ items, handleSelect }: SearchItemProps) => {
  return (
    <li
      onClick={() => handleSelect(items)}
      className="hover:bg-var-primary-50 flex justify-between text-[2rem] leading-[2.6rem] py-[2.1rem] pl-[2.4rem] pr-[1.6rem]"
    >
      <span className="text-inherit">{formatAddressName(items)}</span>
      <Icons.Search />
    </li>
  );
};

export default SearchItems;
