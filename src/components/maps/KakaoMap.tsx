'use client';

import { useEffect, useState } from 'react';

const KakaoMap = ({ detail: details }: { detail: PlanDetailType[] }) => {
  const [duration, setDuration] = useState<number | null>(null);
  useEffect(() => {
    const initializeMap = () => {
      kakao.maps.load(() => {
        const container = document.getElementById('map');

        if (details.length < 2) {
          console.error('출발지와 목적지는 최소 2개 이상의 위치가 필요합니다.');
          return;
        }

        const options = {
          center: new kakao.maps.LatLng(
            details[0].latitude,
            details[0].longitude
          ),
          level: 7,
        };

        if (container) {
          const map = new kakao.maps.Map(container, options);

          const addMarker = (lat: number, lng: number, title: string) => {
            const marker = new kakao.maps.Marker({
              position: new kakao.maps.LatLng(lat, lng),
              title: title,
            });
            marker.setMap(map);
          };

          const drawRoute = async () => {
            try {
              const API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
              const origin = `${details[0].longitude},${details[0].latitude}`;
              const destination = `${details[details.length - 1].longitude},${
                details[details.length - 1].latitude
              }`;
              const waypoints = details
                .slice(1, details.length - 1)
                .map((detail) => `${detail.longitude},${detail.latitude}`)
                .join('|');

              const response = await fetch(
                `https://apis-navi.kakaomobility.com/v1/directions?origin=${origin}&destination=${destination}&waypoints=${waypoints}&priority=RECOMMEND`,
                {
                  headers: {
                    Authorization: `KakaoAK ${API_KEY}`,
                  },
                }
              );

              const data = await response.json();

              if (data.routes && data.routes[0]) {
                setDuration(data.routes[0].summary.duration);
                const path = data.routes[0].sections.flatMap((section: any) =>
                  section.roads.flatMap((road: any) =>
                    road.vertexes.reduce(
                      (acc: any[], _, index: number, array: number[]) => {
                        if (index % 2 === 0) {
                          acc.push(
                            new kakao.maps.LatLng(
                              array[index + 1],
                              array[index]
                            )
                          );
                        }
                        return acc;
                      },
                      []
                    )
                  )
                );

                const polyline = new kakao.maps.Polyline({
                  path: path,
                  strokeWeight: 5,
                  strokeColor: '#FF0000',
                  strokeOpacity: 0.8,
                  strokeStyle: 'solid',
                });

                polyline.setMap(map);
              }
            } catch (error) {
              console.error('오류 발생:', error);
            }
          };

          details.forEach((detail, index) => {
            addMarker(detail.latitude, detail.longitude, detail.place);

            if (index === 0) console.log('출발지:', detail.place);
            else if (index === details.length - 1)
              console.log('목적지:', detail.place);
            else console.log('경유지:', detail.place);
          });

          drawRoute();
        }
      });
    };
    if (window.kakao && window.kakao.maps) {
      initializeMap();
    }
  }, [details]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}분 ${remainingSeconds}초`;
  };
  return (
    <div>
      {/* {duration !== null && (
        <div style={{ marginTop: '10px', fontSize: '16px' }}>
          총 소요 시간: {formatDuration(duration)}
        </div>
      )} */}
      <div
        id="map"
        style={{
          width: '100%',
          height: '500px',
        }}
      ></div>
    </div>
  );
};

export default KakaoMap;
