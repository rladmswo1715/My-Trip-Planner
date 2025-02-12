import { create } from 'zustand';

type PlanStore = {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
  region: {
    selectedRegion: string | null;
    selectedDetails: RegionType[];
    setRegion: (region: string) => void;
    toggleDetail: (detail: string) => void;
    removeDetail: (detail: RegionType) => void;
    clearDetails: () => void;
    setSelectDetails: (detail: string) => void;
    setSearchDetails: (detail: RegionType) => void;
  };
  date: {
    startDay: string | null;
    endDay: string | null;
    numberOfPeople: number;
    setNumberOfPeople: (count: number) => void;
    setStartDay: (date: string) => void;
    setEndDay: (date: string) => void;
  };
  transport: {
    selectedTransport: 'PUBLIC' | 'CAR' | null;
    setTransport: (transport: 'PUBLIC' | 'CAR') => void;
  };
  resetAll: () => void;
};

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

  region: {
    selectedRegion: null,
    selectedDetails: [],
    setRegion: (region) =>
      set((state) => ({
        region: {
          ...state.region,
          selectedRegion: region,
        },
      })),
    setSelectDetails: (detail) =>
      set((state) => ({
        region: {
          ...state.region,
          selectedDetails: [
            ...state.region.selectedDetails,
            { parent: state.region.selectedRegion ?? '', child: detail },
          ],
        },
      })),
    setSearchDetails: (detail) =>
      set((state) => ({
        region: {
          ...state.region,
          selectedDetails: [
            ...state.region.selectedDetails,
            {
              child: detail.child,
              parent: detail.parent,
              grandChild: detail.grandChild,
            },
          ],
        },
      })),
    toggleDetail: (detail) =>
      set((state) => {
        const existingIndex = state.region.selectedDetails.findIndex(
          (item) =>
            item.parent === state.region.selectedRegion && item.child === detail
        );

        return {
          region: {
            ...state.region,
            selectedDetails:
              existingIndex !== -1
                ? state.region.selectedDetails.filter(
                    (_, index) => index !== existingIndex
                  )
                : [
                    ...state.region.selectedDetails,
                    {
                      parent: state.region.selectedRegion ?? '',
                      child: detail,
                    },
                  ],
          },
        };
      }),
    removeDetail: ({ parent, child, grandChild }: RegionType) =>
      set((state) => ({
        region: {
          ...state.region,
          selectedDetails: state.region.selectedDetails.filter((item) => {
            return !(
              item.parent === parent &&
              item.child === child &&
              (item.grandChild === grandChild ||
                (!item.grandChild && !grandChild))
            );
          }),
        },
      })),

    clearDetails: () =>
      set((state) => ({
        region: {
          ...state.region,
          selectedRegion: null,
          selectedDetails: [],
        },
      })),
  },

  date: {
    numberOfPeople: 0,
    startDay: null,
    endDay: null,
    setNumberOfPeople: (count) =>
      set((state) => ({
        date: {
          ...state.date,
          numberOfPeople: Math.max(0, count),
        },
      })),
    setStartDay: (date) =>
      set((state) => ({
        date: {
          ...state.date,
          startDay: date,
        },
      })),
    setEndDay: (date) =>
      set((state) => ({
        date: {
          ...state.date,
          endDay: date,
        },
      })),
  },

  transport: {
    selectedTransport: null,
    setTransport: (transport) =>
      set((state) => ({
        transport: {
          ...state.transport,
          selectedTransport: transport,
        },
      })),
  },

  resetAll: () =>
    set((state) => ({
      region: {
        selectedRegion: null,
        selectedDetails: [],
        setRegion: state.region.setRegion,
        toggleDetail: state.region.toggleDetail,
        removeDetail: state.region.removeDetail,
        clearDetails: state.region.clearDetails,
        setSelectDetails: state.region.setSelectDetails,
        setSearchDetails: state.region.setSearchDetails,
      },
      date: {
        startDay: null,
        endDay: null,
        setStartDay: state.date.setStartDay,
        setEndDay: state.date.setEndDay,
        numberOfPeople: 0,
        setNumberOfPeople: state.date.setNumberOfPeople,
      },
      transport: {
        selectedTransport: null,
        setTransport: state.transport.setTransport,
      },
    })),
}));
