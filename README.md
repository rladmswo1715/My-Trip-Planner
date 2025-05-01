# <img src="https://raw.githubusercontent.com/Trip-plan-web-project/Trip-plan-frontend/refs/heads/dev/src/app/favicon.ico"/> My-Trip-Planner
**여행 일정을 계획하고 다녀온 여행지의 후기를 공유할 수 있는 사이트입니다.**

###### ⭐ **배포 URL** : ~~https://trip-plan-frontend.vercel.app/~~  (백엔드 서버 운영 종료로 인해 사이트 이용이 제한됩니다.)

---

- ### 팀 구성

| 담당 | 이름 |
|:---|:---|
| Backend | 김도욱, 강지석 |
| Frontend | 김은재, 최은석 |
| Designer | 윤담 |

- ### 기술 스택
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/><img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=Zod&logoColor=white"/><img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"><img src="https://img.shields.io/badge/zustand-orange?style=for-the-badge"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"/>


- ### 폴더 구조
```
├── apis/               # API 관련 파일
├── app/                # 페이지 및 레이아웃
      ├──(auth)         # 로그인
      ├──(home)         # 사이트 콘텐츠
        ├──(protected)  # 로그인 후 접근 가능 페이지
      ├─ api            # API Routes
├── assets              # 폰트/아이콘/이미지
├── components/         # UI 컴포넌트
├── constant/           # 상수 정의 폴더
├── lib/hooks/          # 커스텀 훅
├── mocks               # MSW 설정 및 반환 데이터
├── providers           # 컨텍스트 및 프로바이더
├── stores              # zustand 상태 관리 설정
├── types/              # 타입 정의 폴더
├── utils/              # 유틸리티 함수
└── middleware.ts       # 미들웨어 설정
```


- ### 담당 페이지 및 기능
  - 메인페이지
  - 검색 필터 / 검색 페이지
  - 마이페이지
  - 여행 계획 상세페이지
  - 댓글 섹션
  - 좋아요, 찜하기 기능
  - 리뷰 작성페이지 / 상세페이지


- ### 페이지 스크린샷
  
  - **메인 페이지**
    
    
    <img src="https://github.com/user-attachments/assets/8ed87dd6-d814-49b2-8a43-74d8c9be4010" width="400" height="200"/>


  - **검색 페이지**
    - 필터 검색 추가
 

    <!-- <img src="https://github.com/user-attachments/assets/d19b5152-a97e-453c-abc0-0aeb3aeac15b" width="400" height="200"/> -->
    <img src="https://github.com/user-attachments/assets/c29b523d-3b27-41a3-8075-fbdec603d0ec" width="400"/>
    <br>
    <img src="https://github.com/user-attachments/assets/6713e8a3-a7ad-4e18-b28a-69841a719a12" width="200" height="200"/>


  - **마이 페이지**
    - 프로필 수정, 작성 게시글 조회
 
    
    <!-- <img src="https://github.com/user-attachments/assets/644c7780-5e5a-40c6-ab93-65d62efef2c7" width="400" height="200"/> <br> -->
    <!-- <img src="https://github.com/user-attachments/assets/2260f882-49a0-41c6-aa34-ec2c058674c0" width="400" height="200"/> -->
    <img src="https://github.com/user-attachments/assets/0d514628-dd54-42ad-84e4-d86dfd9b8d9f" width="400"/>

    
  - **플랜 상세 페이지**
    - Day별 동선 확인
    - 좋이요 / 찜하기 등
    - 댓글 섹션
    <br>
  
    <!-- <img src="https://github.com/user-attachments/assets/c15fa862-f818-49c8-8566-3ebb463bb364" width="400" height="400"/> -->
    <img src="https://github.com/user-attachments/assets/7ca7763d-bd8a-421d-ba8b-32dd5d1104f1" width="400"/>


  - **리뷰 작성 페이지**
    - 장소 검색 / 별점 평가
 
    
    <!-- <img src="https://github.com/user-attachments/assets/92199299-2547-44f1-97da-202b68d674fc" width="400" height="200"/> <br> -->
    <!-- <img src="https://github.com/user-attachments/assets/a5f87da4-fce7-4c38-9dae-c5a31039ac21" width="200" height="200"/>  -->
    <!-- <img src="https://github.com/user-attachments/assets/7877c33e-ec95-4b9d-8016-3952b59f6c60" width="200" height="200"/> -->
    <img src="https://github.com/user-attachments/assets/2057b577-1dd1-40f2-bfe7-62783d037e0d" width="400"/>


  - **리뷰 상세 페이지**
    - Google Places API 기반 가게 정보 연동
    - 과거 날씨 연동
    - 댓글 섹션 
   <br>
    
    <img src="https://github.com/user-attachments/assets/e8a67dd8-0981-4bc7-9fda-f4062599bf0a" width="400" height="400"/>
