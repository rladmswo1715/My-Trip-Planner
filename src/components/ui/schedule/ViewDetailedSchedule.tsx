import { switchCategoryIcon } from './DetailedSchedule';

const DATA = [
  {
    order: 1,
    place: '제주',
    streetAddress: '제주시',
    latitude: 6,
    longitude: 4,
    categoryName: '교통',
  },
  {
    order: 2,
    place: '제주',
    streetAddress: '제주시',
    latitude: 6,
    longitude: 4,
    categoryName: '교통',
  },
];

const ViewDetailedSchedule = () => {
  return (
    <div className="flex flex-col gap-[3.2rem] w-[31.5%] max-w-[37.8rem] min-w-[44rem]">
      {DATA.map((item, index) => {
        return (
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
            {index !== DATA.length - 1 && (
              <div className="absolute left-[1.95rem] top-[2rem] h-[calc(100%+4rem)] border-l-[1px] border-dashed border-black"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ViewDetailedSchedule;
