type PlanDetailType = {
  order: number;
  place: string;
  streetAddress: string;
  latitude: number;
  longitude: number;
  categoryName: string;
};

type PlanDayType = {
  day: number;
  cost: number;
  date: string;
  detail: PlanDetailType[];
};

type PlanDataType = {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  category: string[];
  people: number;
  days: PlanDayType[];
};
