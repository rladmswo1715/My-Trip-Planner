// Meta 타입
type Meta = {
  total_count: number; // 검색어에 검색된 문서 수
  pageable_count: number; // total_count 중 노출 가능 문서 수 (최대: 45)
  is_end: boolean; // 현재 페이지가 마지막 페이지인지 여부
};

// Address 타입
type Address = {
  address_name: string; // 전체 지번 주소
  region_1depth_name: string; // 지역 1 Depth, 시도 단위
  region_2depth_name: string; // 지역 2 Depth, 구 단위
  region_3depth_name: string; // 지역 3 Depth, 동 단위
  region_3depth_h_name: string; // 지역 3 Depth, 행정동 명칭
  h_code: string; // 행정 코드
  b_code: string; // 법정 코드
  mountain_yn: 'Y' | 'N'; // 산 여부
  main_address_no: string; // 지번 주번지
  sub_address_no: string; // 지번 부번지 (없을 경우 빈 문자열)
  x: string; // X 좌표값, 경위도인 경우 경도(longitude)
  y: string; // Y 좌표값, 경위도인 경우 위도(latitude)
};

// RoadAddress 타입
type RoadAddress = {
  address_name: string; // 전체 도로명 주소
  region_1depth_name: string; // 지역명1
  region_2depth_name: string; // 지역명2
  region_3depth_name: string; // 지역명3
  road_name: string; // 도로명
  underground_yn: 'Y' | 'N'; // 지하 여부
  main_building_no: string; // 건물 본번
  sub_building_no: string; // 건물 부번 (없을 경우 빈 문자열)
  building_name?: string; // 건물 이름 (Optional)
  zone_no: string; // 우편번호 (5자리)
  x: string; // X 좌표값, 경위도인 경우 경도(longitude)
  y: string; // Y 좌표값, 경위도인 경우 위도(latitude)
};

// Document 타입
type PlaceDocument = {
  address_name: string; // 전체 지번 주소 또는 도로명 주소
  address_type: 'REGION' | 'ROAD' | 'REGION_ADDR' | 'ROAD_ADDR'; // address_name의 타입
  x: string; // X 좌표값, 경위도인 경우 경도(longitude)
  y: string; // Y 좌표값, 경위도인 경우 위도(latitude)
  address: Address; // 지번 주소 상세 정보
  road_address: RoadAddress | null; // 도로명 주소 상세 정보 (null 가능)
};

// API 응답 타입
type PlaceAPIType = {
  meta: Meta; // 응답 관련 정보
  documents: PlaceDocument[]; // 응답 결과 배열
};
