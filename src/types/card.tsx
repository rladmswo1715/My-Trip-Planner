import { StaticImageData } from 'next/image';

export type TMainCardList = {
  title: string;
  placeCategory: string[];
  startDate: string;
  endDate: string;
  people: number;
  transportation: 'PUBLIC_TRANSPORT' | 'CAR';
  totalCost: number;
  thumbnail: string | StaticImageData;
};

export type TMypageCardList = {
  planId: number;
  categories: string[];
  title: string;
  created_at: Date;
  thumbnail: string | StaticImageData;
  bookmarkId?: number;
  status?: 'PRIVATE' | 'PUBLIC';
};
