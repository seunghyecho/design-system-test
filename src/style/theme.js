const calcRem = (size) => `${size / 16}rem`;
const fontSizes = {
  xxsmall: calcRem(10),
  xsmall: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};
const fontWeights = {
  regular: "400",
  bold: "700",
  extrabold: "800",
  black: "900",
};
const colors = {
  primary: "#ff9900",
  primarylight: "#ffb74b",
  blue: "#002ab2",
  red: "#ff0000",
  black: "#000000",
  gray22: "#222222",
  gray66: "#666666",
  gray99: "#999999",
  grayaa: "#aaaaaa",
  graycc: "#cccccc",
  grayee: "#eeeeee",
  grayf9: "#f9f9f9",
  grayf5: "#f5f5f5",
  white: "#ffffff",
};
const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};
const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};
const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};
const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};
const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};
const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const theme = {
  fontSizes,
  fontWeights,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
};

export default theme;
