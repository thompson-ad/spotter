import { createTheme } from "@shopify/restyle";

export const palette = {
  oxfordBlue: "#14213D",
  orangeWeb: "#FCA311",
  platinum: "#E5E5E5",
  black: "#000000",
  white: "#FFFFFF",
};

const fontFamilies = {
  headline: "rajdhani-bold",
  date: "rajdhani-bold",
  bodyHeader: "overpass-extra-bold",
  navigation: "rajdhani-bold",
  summary: "overpass-bold",
  body: "overpass-regular",
  button: "rajdhani-bold",
};

const theme = createTheme({
  colors: {
    text: palette.black,
    background: palette.white,
  },
  // Major Third typography scale
  textVariants: {
    headline: {
      fontFamily: fontFamilies.headline,
      fontSize: 39.06,
    },
    subheader: {
      fontFamily: fontFamilies.headline,
      fontSize: 25,
    },
    body: {
      fontFamily: fontFamilies.body,
      fontSize: 16,
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
});

export type Theme = typeof theme;
export default theme;
