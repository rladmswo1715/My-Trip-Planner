export type TPlanInfo = {
  title: string;
  placeCategory: string[];
  author: string;
  profileImage: string;
  createdAt: Date;
  startDate: string;
  endDate: string;
  status: 'PUBLIC' | 'PRIVATE';
  viewCount: number;
  like: number;
  people: number;
  transportation: 'CAR' | 'PUBLIC';
  totalCost: number;
  socialId: string;
};
