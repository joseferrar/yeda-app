import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#000",
      100: "#5A20CB",
    },
    secondary: {
      100: "#E03B8B",
      200: "#8D3DAF",
      300: "rgb(255,99,71)"
    },

    success: {
      100: "#3DBE29",
    },
    info: {
      100: "rgb(40, 199, 172)",
    },
    danger: {
      100: "rgb(220,20,60)",
    },
    default: {
      50: "#fff",
    },
    dark: {
      50: "#120E43",
      100: "#242B2E",
      200: "rgb(255, 255, 255)",
    },
    gray: {
      700: "rgb(255, 255, 255)",
      100: "rgb(105,105,105)",
      50: "rgb(207, 209, 208)",
    },
    Black: {
      200: "#3DBE29",
    },
    // Redefinig only one shade, rest of the color will remain same.
  },
  config: {
    initialColorMode: "dark",
  },
});
