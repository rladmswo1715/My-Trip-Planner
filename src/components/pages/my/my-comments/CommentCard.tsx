import Link from 'next/link';

const CommentCard = () => {
  return (
    <Link
      href="/"
      className="flex flex-col gap-[1.2rem] w-full border border-black/30 rounded-lg px-[2rem] py-[2.25rem] text-[1.4rem] text-black leading-[1.82rem] hover:border-black"
    >
      <div className="flex items-center gap-[1.6rem]">
        <h3 className="text-[2rem] font-semibold leading-[3rem]">
          강릉 3박 4일 일정
        </h3>
        <p className="text-black/30">평창-강릉-속초</p>
      </div>
      <div className="flex flex-col gap-[0.8rem]">
        <p className="text-[1.6rem] leading-[2.08rem]">
          댓글 텍스트가 들어갈 자리입니다.
        </p>
        <span className="text-black/30">2024.12.12</span>
      </div>
    </Link>
  );
};

export default CommentCard;
