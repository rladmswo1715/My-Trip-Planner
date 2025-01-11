'use client';

import NavigationList from './NavigationList';
import { NAV_OPTIONS as NavOptions } from '@/constants/sideNavigation';
import useLastPathSegment from '@/lib/hooks/useLastPathSegment';

const SideNavigation = () => {
  const { lastPathSegment } = useLastPathSegment();

  return (
    <nav className="max-w-[25%] size-full bg-white flex flex-col gap-[5rem] rounded-[0.8rem] shadow-container py-[6rem] pl-[2.8rem]">
      {NavOptions.map((option) => {
        return (
          <NavigationList
            key={option.category}
            items={option}
            lastPathSegment={lastPathSegment}
          />
        );
      })}
    </nav>
  );
};

export default SideNavigation;
