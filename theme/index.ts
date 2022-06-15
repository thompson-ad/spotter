import { createTheme } from "@shopify/restyle";
import { StatusBarStyle } from "react-native";

export const palette = {
  oxfordBlue: "#14213D",
  orangeWeb: "#FCA311",
  platinum: "#E5E5E5",
  black: "#000000",
  white: "#FFFFFF",
  paper00: "#ffffff",
  paper10: "#f5f5f4",
  paper20: "#e6e6e6",
  paper300: "#767577",
  paper900: "#202020",
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
    windowBackground: "#f0f0f0",
    secondaryBackground: palette.paper10,
    foreground: palette.paper900,
  },
  // Major Third typography scale
  textVariants: {
    defaults: {
      fontFamily: fontFamilies.body,
      fontSize: 16,
      color: "text",
    },
    headline: {
      fontFamily: fontFamilies.headline,
      fontSize: 39.06,
    },
    subheader: {
      fontFamily: fontFamilies.headline,
      fontSize: 25,
    },
  },
  spacing: {
    "0": 0,
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 24,
    xxl: 48,
    hg: 128,
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
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128,
  },
  statusBar: {
    barStyle: "dark-content" as StatusBarStyle,
  },
});

export type Theme = typeof theme;
export default theme;
