import ProfileImage from '@/components/ui/ProfileImage';
import Image from 'next/image';
import { ICONS } from '@/constants/importImages';

const CommentsList = () => {
  return (
    <div className="flex flex-col gap-[4rem]">
      <div>
        <div className="flex items-center gap-[1.2rem]">
          <ProfileImage imageUrl="" size="m" />
          <div className="flex justify-between items-center w-full">
            <p className="flex items-center text-[2rem] leading-[2.5rem] gap-[1.2rem]">
              <span className="text-black font-medium">홍길동</span>
              <span className="text-black/60">2024.12.12</span>
            </p>
            <div className="flex items-center gap-[2rem]">
              <button className="flex items-center gap-[0.8rem]">
                <Image
                  src={ICONS.iconDelete.src}
                  alt={ICONS.iconDelete.alt}
                  width={24}
                  height={24}
                />
                <span className="text-[1.6rem] leading-[1.909rem]">
                  삭제하기
                </span>
              </button>
              <button className="flex items-center gap-[0.8rem]">
                <Image
                  src={ICONS.iconEdit.src}
                  alt={ICONS.iconEdit.alt}
                  width={24}
                  height={24}
                />
                <span className="text-[1.6rem] leading-[1.909rem]">
                  수정하기
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="pl-[6rem] py-[1rem]">
          <p className="text-[2rem] leading-[2.5rem]">
            댓글 텍스트가 들어갈 자리입니다.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-[1.2rem]">
          <ProfileImage imageUrl="" size="m" />
          <div className="flex justify-between items-center w-full">
            <p className="flex items-center text-[2rem] leading-[2.5rem] gap-[1.2rem]">
              <span className="text-black font-medium">홍길동</span>
              <span className="text-black/60">2024.12.12</span>
            </p>
            <div className="flex items-center gap-[2rem]">
              <button className="flex items-center gap-[0.8rem]">
                <Image
                  src={ICONS.iconLike.src}
                  alt={ICONS.iconLike.alt}
                  width={24}
                  height={24}
                />
                <span className="text-[1.6rem] leading-[1.909rem]">좋아요</span>
              </button>
              <button className="flex items-center gap-[0.8rem]">
                <Image
                  src={ICONS.iconSiren.src}
                  alt={ICONS.iconSiren.alt}
                  width={24}
                  height={24}
                />
                <span className="text-[1.6rem] leading-[1.909rem]">
                  신고하기
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="pl-[6rem] py-[1rem]">
          <p className="text-[2rem] leading-[2.5rem]">
            댓글 텍스트가 들어갈 자리입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
