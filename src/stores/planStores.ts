import { create } from 'zustand';

type PlanStore = {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
};
type RegionStore = {
  selectedRegion: string | null;
  selectedDetails: string[];
  setRegion: (region: string) => void;
  toggleDetail: (detail: string) => void;
  removeDetail: (detail: string) => void;
  addDetail: (detail: string) => void;
  clearDetails: () => void;
};

type DateStore = {
  startDay: string | null;
  endDay: string | null;
  numberOfPeople: number;
  setStartDay: (date: string) => void;
  setEndDay: (date: string) => void;
  setNumberOfPeople: (count: number) => void;
  resetPlan: () => void;
};

export const useDateStore = create<DateStore>((set) => ({
  startDay: null,
  endDay: null,
  numberOfPeople: 0,
  setStartDay: (date) =>
    set(() => ({
      startDay: date,
    })),
  setEndDay: (date) =>
    set(() => ({
      endDay: date,
    })),
  setNumberOfPeople: (count) =>
    set(() => ({
      numberOfPeople: Math.max(0, count),
    })),
  resetPlan: () =>
    set(() => ({
      startDay: null,
      endDay: null,
      numberOfPeople: 0,
    })),
}));

export const useRegionStore = create<RegionStore>((set) => ({
  selectedRegion: null,
  selectedDetails: [],
  setRegion: (region) =>
    set((state) => ({
      selectedRegion:
        state.selectedRegion === region ? state.selectedRegion : region,
    })),
  toggleDetail: (detail) =>
    set((state) => ({
      selectedDetails: state.selectedDetails.includes(detail)
        ? state.selectedDetails.filter((item) => item !== detail)
        : [...state.selectedDetails, `${state.selectedRegion} > ${detail}`],
    })),
  addDetail: (detail) =>
    set((state) => ({
      selectedDetails: [...state.selectedDetails, detail],
    })),
  removeDetail: (detail) =>
    set((state) => ({
      selectedDetails: state.selectedDetails.filter((item) => item !== detail),
    })),
  clearDetails: () => set(() => ({ selectedDetails: [] })),
}));

export const usePlanStore = create<PlanStore>((set) => ({
  step: 1,
  nextStep: () =>
    set((state) => ({
      step: Math.min(state.step + 1, 3),
    })),
  prevStep: () =>
    set((state) => ({
      step: Math.max(state.step - 1, 1),
    })),
  resetStep: () => set(() => ({ step: 1 })),
}));
