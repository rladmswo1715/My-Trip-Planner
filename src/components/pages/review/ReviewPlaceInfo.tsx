import { useState } from 'react';
import Plus from '@/components/common/Icons/Plus';
import cs from 'classnames';

const ReviewPlaceInfo = () => {
  const [is] = useState(true);

  const placeInfoRender = (
    <div className="pt-[2.8rem] border-t border-[#D9D9D9] flex flex-col gap-[2rem]">
      <div className="flex gap-[1.6rem] items-center">
        <span className="text-[2rem] font-semibold leading-[3rem]">
          하이엔드 제주
        </span>
        <div className="flex gap-[1rem] items-center">
          <div>★★★★★</div>
          <span className="text-[1.8rem] font-bold leading-[2.34rem]">
            (4.0)
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-[1.6rem]">
        <div className="flex items-center gap-[0.8rem]">
          <div>아이콘</div>
          <span className="text-[1.6rem] leading-[2.08rem]">
            제주특별시자치도 제주시 특별자치도, 애월읍 애월북서로길 56
          </span>
        </div>

        <div className="flex items-center gap-[0.8rem]">
          <div>아이콘</div>
          <span className="text-[1.6rem] leading-[2.08rem]">운영 중</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        className={cs(
          'mt-[2rem] px-[2rem] py-[1.2rem] border border-[#D9D9D9] rounded-xl',
          {
            'mb-[2.8rem]': is,
          }
        )}
      >
        <div className="flex justify-between items-center gap-[0.8rem]">
          <span className="text-[1.6rem] text-black/50">
            {is ? '장소 다시 등록하기' : '방문하신 장소를 등록해주세요'}
          </span>
          <Plus size={24} />
        </div>
      </button>
      {is && placeInfoRender}
    </>
  );
};

export default ReviewPlaceInfo;
