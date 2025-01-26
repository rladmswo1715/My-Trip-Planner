import ProfileImage from '@/components/ui/ProfileImage';
import Image from 'next/image';
import { ICONS } from '@/constants/importImages';
import testImg from '@/assets/img/test-img.png';

const detailinfo = [
  {
    key: '기간',
    value: `12월 10일 ~ 12월 13일 · 3박 4일`,
  },
  {
    key: '인원',
    value: `4명`,
  },
  {
    key: '교통수단',
    value: `자차`,
  },
  {
    key: '예상비용',
    value: `총액 200,000원 (인당 50,000원)`,
  },
];

const PlanInfoSection = () => {
  return (
    <section className="flex flex-col gap-[4.5rem]">
      <div className="flex flex-col gap-[0.4rem] items-start text-[2rem] text-black leading-[2.6rem]">
        <div className="flex justify-between items-center gap-[6.8rem]">
          <div className="flex items-center gap-[1.2rem]">
            <h2 className="text-[3.2rem] font-bold leading-[4.8rem]">
              강원 3박4일 여행
            </h2>
            <button className="text-[#7E7E7E]">편집</button>
          </div>
          <div className="flex items-center gap-[1.6rem]">
            <button className="font-semibold leading-[3rem]">공개</button>
            <button className="text-black/40">비공개</button>
          </div>
        </div>
        <p className="text-black/60">평창 - 강릉 - 속초</p>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-[2.4rem]">
          <div className="flex flex-col gap-[1.2rem]">
            <div className="flex items-center gap-[1.2rem] text-[2rem] leading-[2.5rem]">
              <ProfileImage imageUrl="" size="m" />
              <span className="font-medium">홍길동</span>
              <span className="text-black/60">2024.12.12</span>
            </div>
            <div className="flex items-center gap-[2rem] text-[1.6rem] leading-[1.909]">
              <div className="flex items-center gap-[0.8rem]">
                <Image
                  src={ICONS.iconEye.src}
                  alt={ICONS.iconEye.alt}
                  width={24}
                  height={24}
                />
                <span>123</span>
              </div>
              <div className="flex items-center gap-[0.8rem]">
                <Image
                  src={ICONS.iconLike.src}
                  alt={ICONS.iconLike.alt}
                  width={24}
                  height={24}
                />
                <span>123</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[2rem]">
            <h3 className="text-[2.4rem] font-semibold leading-[3.6rem]">
              여행 정보
            </h3>

            <div className="flex flex-col gap-[1.2rem]">
              {detailinfo.map((e) => (
                <div
                  key={e.key}
                  className="flex items-center gap-[1.2rem] text-[2rem]"
                >
                  <span className="leading-[3rem] font-semibold">{e.key}</span>
                  <span className="leading-[2.6rem] text-black/70">
                    {e.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative max-w-[48rem] w-full rounded-[1.6rem] overflow-hidden my-[2.2rem]">
          <Image src={testImg} alt="썸네일" className="object-cover" fill />
        </div>
      </div>
    </section>
  );
};

export default PlanInfoSection;
