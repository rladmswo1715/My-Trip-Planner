import { STEP_TITLE } from '@/types/enum';
import Button from '../common/Button';
import RegionSelectStep from '../plan-setting-step/RegionSelectStep';
import DateFilterContent from './DateFilterContent';
import TransportSelectStep from '../plan-setting-step/TransportSelectStep';
import PlanTag from '../plan-setting-step/plan-setting-step-tab/TagList';
import { useFilterStore } from '@/stores/filterStores';

interface SearchFilterProps {
  filterCategory: 'region' | 'date' | 'transport';
  onClose: () => void;
}

const SearchFilter = ({ filterCategory, onClose }: SearchFilterProps) => {
  const { resetCategory, saveFilter } = useFilterStore();

  const renderStep = () => {
    switch (filterCategory) {
      case 'region':
        return {
          render: <RegionSelectStep isFilterType title={STEP_TITLE.REGION} />,
          button: true,
        };
      case 'date':
        return {
          render: <DateFilterContent title={STEP_TITLE.DATE} />,
          button: true,
        };
      case 'transport':
        return {
          render: (
            <TransportSelectStep isFilterType title={STEP_TITLE.TRANSPORT} />
          ),
          button: true,
        };
      default:
        return {};
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <section className="grow">{renderStep().render}</section>
      {filterCategory === 'region' && (
        <div className="relative">
          <div className="absolute bottom-0 w-full bg-opacity-5 backdrop-blur-sm">
            <PlanTag isFilterType />
          </div>
        </div>
      )}
      <div className="flex w-full gap-[2rem]">
        <Button
          size="lg"
          btnColor="white"
          className="flex-1 text-var-primary-500"
          onClick={() => resetCategory(filterCategory)}
        >
          초기화
        </Button>
        <Button
          size="lg"
          btnColor="blue"
          className="flex-1"
          onClick={() => {
            saveFilter(filterCategory);
            onClose();
          }}
        >
          완료
        </Button>
      </div>
    </div>
  );
};

export default SearchFilter;
