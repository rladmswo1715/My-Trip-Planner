export const formatAddressName = (items: PlaceDocument) => {
  const {
    region_1depth_name,
    region_2depth_name,
    region_3depth_h_name,
    region_3depth_name,
  } = items.address;

  return `${region_1depth_name} ${
    region_2depth_name && '> ' + region_2depth_name
  } ${
    region_3depth_name
      ? '> ' + region_3depth_name
      : region_3depth_h_name
      ? '> ' + region_3depth_h_name
      : ''
  } `;
};

export const CategoryMap: Record<string, { id: number; name: string }> = {
  MT1: { id: 1, name: '대형마트' },
  CS2: { id: 2, name: '편의점' },
  PS3: { id: 3, name: '어린이집, 유치원' },
  SC4: { id: 4, name: '학교' },
  AC5: { id: 5, name: '학원' },
  PK6: { id: 6, name: '주차장' },
  OL7: { id: 7, name: '주유소, 충전소' },
  SW8: { id: 8, name: '지하철역' },
  BK9: { id: 9, name: '은행' },
  CT1: { id: 10, name: '문화시설' },
  AG2: { id: 11, name: '중개업소' },
  P03: { id: 12, name: '공공기관' },
  AT4: { id: 13, name: '관광명소' },
  AD5: { id: 14, name: '숙박' },
  FD6: { id: 15, name: '음식점' },
  CE7: { id: 16, name: '카페' },
  HP8: { id: 17, name: '병원' },
  PM9: { id: 18, name: '약국' },
};

export const getCategoryId = (code: string): number | null => {
  return CategoryMap[code]?.id ?? null;
};

export const getCategoryName = (code: string): string | null => {
  return CategoryMap[code]?.name ?? null;
};
