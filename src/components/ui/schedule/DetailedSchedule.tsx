import Icons from '@/components/common/Icons';
import PlacesList from './DragableScheduleList';

interface DetailedScheduleProps {
  placesData: PlanDetailType[];
  day: number;
}
export const switchCategoryIcon = (category: string) => {
  switch (category) {
    case 'PK6': // 주차장
    case 'OL7': // 주유소, 충전소
    case 'SW8': // 지하철역
      return <Icons.Traffic className="z-10" />;

    case 'FD6': // 음식점
    case 'CE7': // 카페
      return <Icons.Restaurant className="z-100" />;

    case 'MT1': // 대형마트
    case 'CS2': // 편의점
    case 'PS3': // 어린이집, 유치원
    case 'SC4': // 학교
    case 'AC5': // 학원
    case 'BK9': // 은행
    case 'AG2': // 중개업소
    case 'HP8': // 병원
    case 'PM9': // 약국
    case 'AD5': // 숙박
      return <Icons.Building className="z-10" />;

    case 'CT1': // 문화시설
    case 'PO3': // 공공기관
    case 'AT4': // 관광명소
      return <Icons.Map className="z-10" />;

    default:
      return <Icons.Map className="z-10" />;
  }
};

const DetailedSchedule = ({ placesData, day }: DetailedScheduleProps) => {
  // 카테고리 코드, 아이콘 나오면 수정

  return (
    <div className="flex flex-col gap-[4rem] w-[31.5%] max-w-[37.8rem] min-w-[44rem]">
      {/* {placesData.map((item, index) => (
        <div
          key={item.order}
          className="relative flex gap-[2.4rem] items-start"
        >
          {switchCategoryIcon(item.categoryName)}
          <div className="flex flex-col gap-[0.4rem]">
            <h3 className="text-[2rem] text-black font-semibold leading-[3rem]">
              {item.place}
            </h3>
            <p className="text-[1.6rem] text-black/50 leading-[2.08]">
              {item.streetAddress}
            </p>
          </div>
          {index !== placesData.length - 1 && (
            <div className="absolute left-[1.95rem] top-[2rem] h-[calc(100%+4rem)] border-l-[1px] border-dashed border-black"></div>
          )}
        </div>
      ))} */}
      <PlacesList placesData={placesData} day={day}></PlacesList>
    </div>
  );
};

export default DetailedSchedule;
