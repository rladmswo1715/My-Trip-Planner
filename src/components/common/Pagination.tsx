import { ICONS } from '@/constants/importImages';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const maxPage = 5;

  const groupStart = Math.floor((currentPage - 1) / maxPage) * maxPage + 1;
  const groupEnd = Math.min(groupStart + maxPage - 1, totalPages);

  const pages = Array.from(
    { length: groupEnd - groupStart + 1 },
    (_, idx) => groupStart + idx
  );

  return (
    <div className="flex items-center justify-center gap-[4rem]">
      {groupStart !== 1 && (
        <button>
          <Image src={ICONS.iconLeftArrow.src} alt={ICONS.iconLeftArrow.alt} />
        </button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          className={`text-[1.8rem] font-extrabold ${
            page === currentPage ? 'text-[#DDDDDD]' : 'text-black'
          }`}
        >
          {page}
        </button>
      ))}

      {groupEnd !== totalPages && (
        <button>
          <Image
            src={ICONS.iconRightArrow.src}
            alt={ICONS.iconRightArrow.alt}
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
