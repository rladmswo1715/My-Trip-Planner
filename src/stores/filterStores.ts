import { create } from 'zustand';

type FilterStore = {
  filterCategory: string | null;
  region: {
    selectedRegion: string | null;
    selectedDetails: string[];
    setRegion: (region: string) => void;
    toggleDetail: (detail: string) => void;
    removeDetail: (detail: string) => void;
    clearDetails: () => void;
    setSelectDetails: (detail: string) => void;
  };
  date: {
    selectedDate: string | null;
    setDate: (date: string) => void;
  };
  transport: {
    selectedTransport: 'public' | 'car' | null;
    setTransport: (transport: 'public' | 'car') => void;
  };
  confirmedFilter: {
    selectedDetails: string[];
    selectedDate: string | null;
    selectedTransport: 'public' | 'car' | null;
  };
  saveFilter: (filterCategory: string) => void;
  resetCategory: (filterCategory: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  filterCategory: null,
  region: {
    selectedRegion: null,
    selectedDetails: [],
    setRegion: (region) =>
      set((state) => ({
        region: {
          ...state.region,
          selectedRegion:
            state.region.selectedRegion === region
              ? state.region.selectedRegion
              : region,
        },
      })),
    setSelectDetails: (detail) =>
      set((state) => ({
        region: {
          ...state.region,
          selectedDetails: [...state.region.selectedDetails, detail],
        },
      })),
    toggleDetail: (detail) =>
      set((state) => ({
        region: {
          ...state.region,
          selectedDetails: state.region.selectedDetails.includes(detail)
            ? state.region.selectedDetails.filter((item) => item !== detail)
            : [
                ...state.region.selectedDetails,
                state.region.selectedRegion + ' > ' + detail,
              ],
        },
      })),
    removeDetail: (detail) =>
      set((state) => ({
        region: {
          ...state.region,
          selectedDetails: state.region.selectedDetails.filter(
            (item) => item !== detail
          ),
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
    selectedDate: null,
    setDate: (date) =>
      set((state) => ({
        date: {
          ...state.date,
          selectedDate: date,
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
  confirmedFilter: {
    selectedDetails: [],
    selectedDate: null,
    selectedTransport: null,
  },

  saveFilter: (filterCategory) =>
    set((state) => {
      if (filterCategory === 'region') {
        return {
          confirmedFilter: {
            ...state.confirmedFilter,
            selectedDetails: state.region.selectedDetails,
          },
        };
      } else if (filterCategory === 'date') {
        return {
          confirmedFilter: {
            ...state.confirmedFilter,
            selectedDate: state.date.selectedDate,
          },
        };
      } else if (filterCategory === 'transport') {
        return {
          confirmedFilter: {
            ...state.confirmedFilter,
            selectedTransport: state.transport.selectedTransport,
          },
        };
      }
      return state;
    }),

  resetCategory: (filterCategory) =>
    set((state) => {
      const newState = { ...state };

      if (filterCategory === 'region') {
        newState.region = {
          selectedRegion: null,
          selectedDetails: [],
          setRegion: state.region.setRegion,
          toggleDetail: state.region.toggleDetail,
          removeDetail: state.region.removeDetail,
          clearDetails: state.region.clearDetails,
          setSelectDetails: state.region.setSelectDetails,
        };
      } else if (filterCategory === 'date') {
        newState.date = {
          selectedDate: null,
          setDate: state.date.setDate,
        };
      } else if (filterCategory === 'transport') {
        newState.transport = {
          selectedTransport: null,
          setTransport: state.transport.setTransport,
        };
      }

      return newState;
    }),
}));
