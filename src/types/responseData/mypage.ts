import { TMypageCardList } from '../card';

export type TMyPlanners = {
  plans: TMypageCardList[];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  first: boolean;
  last: boolean;
};

export type TComment = {
  commentId: number;
  planId: number;
  title: string;
  category: string[];
  created_at: Date;
  content: string;
};

export type TMyComments = {
  comments: TComment[];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  first: boolean;
  last: boolean;
};
