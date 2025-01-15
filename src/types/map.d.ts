// 기본 타입 정의
type LatLng = {
  x: number; // 경도 (Longitude)
  y: number; // 위도 (Latitude)
};

type Road = {
  name: string; // 도로명
  distance: number; // 도로 길이 (미터)
  duration: number; // 예상 이동 시간 (초)
  traffic_speed: number; // 현재 교통 정보 속도 (km/h)
  traffic_state: number; // 교통 상태 코드
  vertexes: number[]; // 경로 좌표 배열 (경도, 위도 순)
};

type Guide = {
  name: string; // 명칭
  x: number; // 경도
  y: number; // 위도
  distance: number; // 이전 가이드 지점까지 거리 (미터)
  duration: number; // 이전 가이드 지점까지 예상 시간 (초)
  type: number; // 안내 타입
  guidance: string; // 안내 문구
  road_index: number; // 해당 링크 인덱스
};

type Section = {
  distance: number; // 구간 거리 (미터)
  duration: number; // 구간 예상 이동 시간 (초)
  bound?: {
    min_x: number; // 바운딩 박스 왼쪽 하단 경도
    min_y: number; // 바운딩 박스 왼쪽 하단 위도
    max_x: number; // 바운딩 박스 오른쪽 상단 경도
    max_y: number; // 바운딩 박스 오른쪽 상단 위도
  };
  roads: Road[]; // 도로 정보 배열
  guides: Guide[]; // 안내 정보 배열
};

type Fare = {
  taxi: number; // 택시 요금 (원)
  toll: number; // 통행 요금 (원)
};

type Summary = {
  distance: number; // 전체 경로 거리 (미터)
  duration: number; // 전체 경로 예상 시간 (초)
  origin: LatLng & { name: string }; // 출발지 정보
  destination: LatLng & { name: string }; // 목적지 정보
  waypoints?: (LatLng & { name: string })[]; // 경유지 배열
  fare: Fare; // 요금 정보
};

type Route = {
  summary: Summary; // 경로 요약 정보
  sections: Section[]; // 경로 구간 배열
};

// 전체 응답 타입
type DirectionsResponse = {
  trans_id: string; // 경로 요청 ID
  routes: Route[]; // 경로 배열
  result_code: number; // 결과 코드
  result_msg: string; // 결과 메시지
};
