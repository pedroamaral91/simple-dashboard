export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1280px',
  laptopL: '1440px',
  laptopFHD: '1920px',
  desktop: '2560px',
};

export default Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(min-width: ${size[cur]})`;
  return acc;
}, {});
