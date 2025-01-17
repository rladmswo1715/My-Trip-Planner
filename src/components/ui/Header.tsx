'use client';
import Link from 'next/link';
import LogoWithText from './LogoWithText';
import { useState } from 'react';
import HeaderProfile from './HeaderProfile';
import { useRouter } from 'next/navigation';
import Modal from '../common/Modal';
import PlanSetting from '../PlanSetting';
// import { socialLogin } from '@/lib/server/login';

// const NAV_LIST = [
//   {
//     title: '여행 일정',
//     link: '/',
//   },
//   {
//     title: '내 여행 계획하기',
//     link: '/',
//   },
// ];

const Header = () => {
  const [isLogin] = useState(false); //임시
  const [settingModal, setSettingModal] = useState(false);
  const router = useRouter();
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_IP}/users/signin/kakao`;
  };
  const LoginButtonLender = (
    <button onClick={() => handleLogin()}>
      <span className="text-[2rem] leading-[2.5rem] font-normal text-white">
        로그인
      </span>
    </button>
  );

  const confirmOpenModal = () => {
    const data = localStorage.getItem('planData');
    if (!!data) {
      const { planId } = JSON.parse(data);
      if (window.confirm('작성중인 계획이있습니다 이동하시겠습니까?')) {
        return router.push(`plan/${planId}/create`);
      }
    }
    setSettingModal(true);
  };

  return (
    <header className="w-full bg-var-primary-500">
      <div className="flex justify-between max-w-[132.8rem] w-full mx-auto items-center py-[3.2rem] px-[2.4rem]">
        <div className="flex items-center gap-[6rem]">
          <Link href="/">
            <LogoWithText />
          </Link>
          <nav className="flex gap-[6rem]">
            <Link href="/" className="text-[2.4rem] text-white font-semibold">
              여행 일정
            </Link>
            <span
              className="text-[2.4rem] text-white font-semibold cursor-pointer"
              onClick={confirmOpenModal}
            >
              내 여행 계획하기
            </span>
          </nav>
        </div>

        <div>
          {isLogin ? (
            <HeaderProfile nickname="홍길동" src="" />
          ) : (
            LoginButtonLender
          )}
        </div>
      </div>
      {settingModal && (
        <Modal onClose={() => setSettingModal(!settingModal)}>
          <PlanSetting onClose={() => setSettingModal(!settingModal)} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
