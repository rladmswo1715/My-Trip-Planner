import { TMainCardList } from '../card';

export type TSearchList = {
  plans: TMainCardList[];
  hasNext: boolean;
  nextValue: string;
  nextId: number;
  totalCount: number;
};
