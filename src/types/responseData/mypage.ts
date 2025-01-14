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
