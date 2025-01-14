import { myPlannersMock } from '@/utils/mockData';
import CardList from '../CardList';

const MyPlannerListSection = () => {
  return <CardList listItems={myPlannersMock} />;
};

export default MyPlannerListSection;
