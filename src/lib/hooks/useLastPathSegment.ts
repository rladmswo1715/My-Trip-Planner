import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const useLastPathSegment = () => {
  const pathname = usePathname();

  const lastPathSegment = useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    return pathSegments[pathSegments.length - 1];
  }, [pathname]);

  return { lastPathSegment };
};

export default useLastPathSegment;
