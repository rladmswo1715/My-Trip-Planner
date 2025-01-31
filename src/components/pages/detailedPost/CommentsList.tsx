import ProfileImage from '@/components/ui/ProfileImage';
import { TPlanCommmentItem } from '@/types/responseData/detailedPlan';
import CommentUserAction from './CommentUserAction';
import { formatDate } from '@/utils/dateUtils';

interface CommentsListProps {
  listData: TPlanCommmentItem[];
  accessToken: string;
  socialId: string;
  planId: number;
  currentPage: number;
}

const CommentsList = ({
  listData,
  accessToken,
  socialId,
  planId,
  currentPage,
}: CommentsListProps) => {
  return (
    <div className="flex flex-col gap-[4rem]">
      {listData.map((item) => {
        return (
          <div key={item.commentId}>
            <div className="flex items-center gap-[1.2rem]">
              <ProfileImage imageUrl="" size="m" />
              <div className="flex justify-between items-center w-full">
                <p className="flex items-center text-[2rem] leading-[2.5rem] gap-[1.2rem]">
                  <span className="text-black font-medium">
                    {item.nickname}
                  </span>
                  <span className="text-black/60">
                    {formatDate('comment', item.createdAt)}
                  </span>
                </p>
                <CommentUserAction
                  isMine={socialId === item.socialId}
                  accessToken={accessToken}
                  commentId={item.commentId}
                  planId={planId}
                  currentPage={currentPage}
                />
              </div>
            </div>
            <div className="pl-[6rem] py-[1rem]">
              <p className="text-[2rem] leading-[2.5rem]">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
