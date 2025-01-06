export const personalCostCalc = (people: number, totalCost: number) => {
  return (totalCost / people).toLocaleString();
};
