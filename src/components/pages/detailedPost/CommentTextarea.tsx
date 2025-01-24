const CommentTextarea = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <textarea
        className="text-[1.8rem] text-black leading-[2.16rem] w-full min-h-[18rem] p-[2rem] border border-black rounded-lg"
        placeholder="댓글을 남겨주세요"
      />
      <button className="text-[2rem] text-black leading-[2.4rem] px-[4rem] py-[1rem] border border-black rounded-lg self-end">
        등록
      </button>
    </div>
  );
};

export default CommentTextarea;
