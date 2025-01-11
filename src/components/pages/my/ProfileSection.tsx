'use client';

import { useState } from 'react';
import ProfileContents from './ProfileContents';

enum ETitle {
  basic = '내 정보',
  edit = '프로필 편집',
}

const ProfileSection = () => {
  const [isEdit, setIsEdit] = useState(false);

  const editButtonHandler = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <section className="flex flex-col gap-[3.2rem]">
      <h2 className="text-[2rem] text-black font-semibold leading-[2.387rem]">
        {isEdit ? ETitle.edit : ETitle.basic}
      </h2>
      <ProfileContents isEdit={isEdit} editButtonClick={editButtonHandler} />
    </section>
  );
};

export default ProfileSection;
