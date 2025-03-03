import { create } from 'zustand';

interface ReviewStore {
  selectedPlace: GooglePlaceAPIType | null;
  ratings: { [key: string]: number };
  setSelectedPlace: (place: GooglePlaceAPIType) => void;
  setRating: (question: string, rating: number) => void;

  getAverageRating: () => number;
  reset: () => void;
}

export const useReviewStore = create<ReviewStore>((set, get) => ({
  selectedPlace: null,
  ratings: {},
  setSelectedPlace: (place) => set({ selectedPlace: place }),
  setRating: (question, rating) =>
    set((state) => ({
      ratings: { ...state.ratings, [question]: rating },
    })),

  getAverageRating: () => {
    const { ratings } = get();
    const values = Object.values(ratings);
    return values.length
      ? values.reduce((a, b) => a + b, 0) / values.length
      : 0;
  },

  reset: () => set({ selectedPlace: null, ratings: {} }),
}));
