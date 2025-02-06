import { TComment } from '@/types/responseData/mypage';
import { formatDate } from '@/utils/dateUtils';
import Link from 'next/link';

interface CommentCardProps {
  itemData: TComment;
}

const CommentCard = ({ itemData }: CommentCardProps) => {
  const { planId, categories, comment, title, createdAt } = itemData;

  const formattedPlaceCategory = categories.join('-');

  return (
    <Link
      href={`/plan-n/${planId}`}
      className="flex flex-col gap-[1.2rem] w-full border border-black/30 rounded-lg px-[2rem] py-[2.25rem] text-[1.4rem] text-black leading-[1.82rem] hover:border-black"
    >
      <div className="flex items-center gap-[1.6rem]">
        <h3 className="text-[2rem] font-semibold leading-[3rem]">{title}</h3>
        <p className="text-black/30">{formattedPlaceCategory}</p>
      </div>
      <div className="flex flex-col gap-[0.8rem]">
        <p className="text-[1.6rem] leading-[2.08rem]">{comment}</p>
        <span className="text-black/30">
          {formatDate('comment', new Date(createdAt))}
        </span>
      </div>
    </Link>
  );
};

export default CommentCard;
