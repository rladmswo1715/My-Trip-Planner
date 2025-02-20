import Button from '@/components/common/Button';
import ReviewTitleInput from './ReviewTitleInput';
import ReviewPlaceInfo from './ReviewPlaceInfo';
import ReviewTextEditor from './ReviewTextEditor';

const ReviewForm = () => {
  return (
    <form>
      <div className="mb-[1.6rem] flex items-center justify-between">
        <h2 className="text-[2rem] font-semibold leading-[3rem]">
          여행 후기 작성하기
        </h2>
        <Button
          btnColor="white"
          size="md"
          className="text-var-primary-500 rounded"
        >
          등록
        </Button>
      </div>
      <ReviewTitleInput />
      <ReviewPlaceInfo />
      <ReviewTextEditor />
    </form>
  );
};

export default ReviewForm;
