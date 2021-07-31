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
    },

    success: {
      100: "#3DBE29",
    },
    default: {
      50: "#fff",
    },
    dark: {
      50: "#120E43",
      100: "#242B2E",
    },
    gray: "gray",
    // Redefinig only one shade, rest of the color will remain same.
  },
  config: {
    initialColorMode: "dark",
  },
});
