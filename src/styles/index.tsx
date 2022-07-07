import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "0.5rem",

  colors: {
    main: "#9575cd",
    secondary: "#546e7a",
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
    },
  },
  shadow: {
    sm: "0px 5px 7px -3px rgba(0,0,0,0.1)",
    md: "0px 8px 26px -3px rgba(0,0,0,0.1)",
    lg: "0px 20px 26px -3px rgba(0,0,0,0.1)",
  },
};

export { theme };
