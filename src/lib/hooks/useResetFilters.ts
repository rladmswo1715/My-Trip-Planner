import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useFilterStore } from '@/stores/filterStores';

export const useResetFiltersOnRouteChange = () => {
  const pathname = usePathname();
  const resetCategory = useFilterStore((state) => state.resetCategory);
  const saveFilter = useFilterStore((state) => state.saveFilter);

  useEffect(() => {
    if (!pathname.startsWith('/search')) {
      resetCategory('region');
      resetCategory('date');
      resetCategory('transport');
      saveFilter('region');
      saveFilter('date');
      saveFilter('transport');
    }
  }, [pathname, resetCategory, saveFilter]);
};
