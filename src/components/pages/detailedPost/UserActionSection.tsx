import Image from 'next/image';
import { ICONS } from '@/constants/importImages';

interface UserActionSectionProps {
  planId: number;
}

const shareButtonClickHandler = () => {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert('URL이 복사되었습니다.');
    })
    .catch((err) => {
      alert('URL 복사 실패');
      console.error(err);
    });
};

const UserActionSection = ({ planId }: UserActionSectionProps) => {
  const renderActionOptions = [
    {
      key: '좋아요',
      image: { src: ICONS.iconLike.src, alt: ICONS.iconLike.alt },
      clickHandler: () => {
        console.log('11');
      },
    },
    {
      key: '공유하기',
      image: { src: ICONS.iconShare.src, alt: ICONS.iconShare.alt },
      clickHandler: shareButtonClickHandler,
    },
  ];

  return (
    <section className="flex items-center mt-[6rem] pb-[4rem] border-b border-[#D9D9D9] gap-[3.6rem]">
      {renderActionOptions.map((option) => {
        return (
          <button
            type="button"
            key={option.key}
            className="flex items-center gap-[1.6rem]"
            onClick={option.clickHandler}
          >
            <Image
              src={option.image.src}
              alt={option.image.alt}
              width={36}
              height={36}
            />
            <span className="text-[2rem] font-semibold leading-[2.387rem]">
              {option.key}
            </span>
          </button>
        );
      })}
    </section>
  );
};

export default UserActionSection;
