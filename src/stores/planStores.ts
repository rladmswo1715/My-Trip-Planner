import { create } from 'zustand';

type PlanStore = {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
};
type RegionStore = {
  selectedRegion: string | null; // 선택된 상위 지역
  selectedDetails: string[]; // 선택된 상세 지역 리스트
  setRegion: (region: string) => void; // 상위 지역 설정
  toggleDetail: (detail: string) => void; // 상세 지역 추가/제거
  removeDetail: (detail: string) => void; // 상세 지역 삭제
  clearDetails: () => void; // 상세 지역 초기화
};

export const useRegionStore = create<RegionStore>((set) => ({
  selectedRegion: null,
  selectedDetails: [],
  setRegion: (region) =>
    set((state) => ({
      selectedRegion:
        state.selectedRegion === region ? state.selectedRegion : region,
      // 동일한 지역을 다시 클릭해도 상태가 변경되지 않음
    })),
  toggleDetail: (detail) =>
    set((state) => ({
      selectedDetails: state.selectedDetails.includes(detail)
        ? state.selectedDetails.filter((item) => item !== detail)
        : [...state.selectedDetails, detail],
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
