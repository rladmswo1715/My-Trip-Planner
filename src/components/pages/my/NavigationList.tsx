import { TNAV_OPTIONS } from '@/types/sideNavigation';
import Link from 'next/link';

interface NavigationListProps {
  items: TNAV_OPTIONS;
  lastPathSegment: string;
}

const NavigationList = ({ items, lastPathSegment }: NavigationListProps) => {
  return (
    <div className="flex flex-col gap-[2.4rem]">
      <h3 className="text-[1.8rem] text-black/30 font-medium leading-[2.34rem]">
        {items.category}
      </h3>
      <div className="flex flex-col gap-[1.6rem] text-[2rem] text-black/50 font-semibold leading-[3rem]">
        {items.listItems.map((item) => {
          return item.urlPath === 'storage' ? (
            <span key={item.urlPath} className="cursor-not-allowed">
              {item.title}
            </span>
          ) : (
            <Link
              key={item.urlPath}
              href={`/my/${item.urlPath}`}
              className={`${lastPathSegment === item.urlPath && 'text-black'}`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationList;
