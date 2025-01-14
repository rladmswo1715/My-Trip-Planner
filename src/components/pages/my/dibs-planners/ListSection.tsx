import { dibsPlannersMock } from '@/utils/mockData';
import CardList from '../CardList';

const DibsPlannerListSection = () => {
  return <CardList listItems={dibsPlannersMock} />;
};

export default DibsPlannerListSection;
