export type TDetailedReviewInfo = {
  id: number;
  socialId: string;
  likeId: number | null;
  bookmarkId: number | null;
  placeId: string;
  title: string;
  nickname: string;
  userImage: string;
  content: string;
  viewCount: number;
  latitude: number;
  longitude: number;
  visitedDay: Date;
  averageRating: number;
  createAt: Date;
  like: number;
};
