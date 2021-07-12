import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#000",
    },
    secondary: {
        100: "#E03B8B",
    },
    default: {
        50:"#fff"
    },
    gray: {
      400: "gray",
    },
    // Redefinig only one shade, rest of the color will remain same.
  },
  config: {
    initialColorMode: "dark",
  },
});
