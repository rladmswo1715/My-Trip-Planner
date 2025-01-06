import { create } from 'zustand';

interface PlanStore {
  step: number; // 현재 단계
  selectedRegion: string | null; // 선택한 지역
  selectedDate: { start: Date | null; end: Date | null }; // 선택한 날짜
  selectedTransport: string | null; // 선택한 교통수단
  nextStep: () => void; // 다음 단계로 이동
  prevStep: () => void; // 이전 단계로 이동
  resetPlan: () => void; // 계획 초기화
  setRegion: (region: string) => void;
  setDate: (date: { start: Date; end: Date }) => void;
  setTransport: (transport: string) => void;
}

export const usePlanStore = create<PlanStore>((set) => ({
  step: 1,
  selectedRegion: null,
  selectedDate: { start: null, end: null },
  selectedTransport: null,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  resetPlan: () =>
    set({
      step: 1,
      selectedRegion: null,
      selectedDate: { start: null, end: null },
      selectedTransport: null,
    }),
  setRegion: (region) => set({ selectedRegion: region }),
  setDate: (date) => set({ selectedDate: date }),
  setTransport: (transport) => set({ selectedTransport: transport }),
}));
