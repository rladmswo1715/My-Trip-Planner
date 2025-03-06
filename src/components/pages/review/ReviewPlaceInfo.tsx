import { useState } from 'react';
import Plus from '@/components/common/Icons/Plus';
import cs from 'classnames';
import ReviewModalLayout from './ReviewModalLayout';
import { useReviewStore } from '@/stores/reviewStores';
import PlaceDetailedInfo from './PlaceDetailedInfo';

const ReviewPlaceInfo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { isReviewCompleted } = useReviewStore();

  return (
    <>
      <button
        type="button"
        className={cs(
          'mt-[2rem] px-[2rem] py-[1.2rem] border border-[#D9D9D9] rounded-xl',
          {
            'mb-[2.8rem]': true,
          }
        )}
        onClick={() => setModalOpen(true)}
      >
        <div className="flex justify-between items-center gap-[0.8rem]">
          <span className="text-[1.6rem] text-black/50">
            {isReviewCompleted
              ? '장소 다시 등록하기'
              : '방문하신 장소를 등록해주세요'}
          </span>
          <Plus size={24} />
        </div>
      </button>
      {isReviewCompleted && <PlaceDetailedInfo />}
      {isModalOpen && <ReviewModalLayout onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ReviewPlaceInfo;
