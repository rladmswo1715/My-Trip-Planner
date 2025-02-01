import { postAddComment } from '@/apis/plan';
import { TPlanComments } from '@/types/responseData/detailedPlan';
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IPostCommentData {
  planId: number;
  content: string;
}

interface CommentTextareaProps {
  planId: number;
  accessToken: string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<TPlanComments, Error>>;
  currentPage: number;
}

const CommentTextarea = ({
  planId,
  accessToken,
  refetch,
  currentPage,
}: CommentTextareaProps) => {
  const [content, setContent] = useState('');
  const router = useRouter();

  const addCommentMutation = useMutation({
    mutationFn: (postCommentData: IPostCommentData) =>
      postAddComment(postCommentData, accessToken),
    onSuccess: () => {
      if (currentPage > 1) {
        router.push(`/plan-n/${planId}?currentPage=1`);
      } else refetch();
    },
  });

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const postCommentData = { planId, content };
      addCommentMutation.mutate(postCommentData);
      setContent('');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleAddComment} className="flex flex-col gap-[2rem]">
      <textarea
        className="text-[1.8rem] text-black leading-[2.16rem] w-full min-h-[18rem] p-[2rem] border border-black rounded-lg"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="댓글을 남겨주세요"
        maxLength={100}
      />
      <button className="text-[2rem] text-black leading-[2.4rem] px-[4rem] py-[1rem] border border-black rounded-lg self-end">
        등록
      </button>
    </form>
  );
};

export default CommentTextarea;
