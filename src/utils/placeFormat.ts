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
