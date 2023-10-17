export const theme = {
  screens: {
    mobile: "320px",

    tablet: "768px",

    desktop: "1280px",
  },

  fonts: {
    primary: "Bradley Hand, cursive",
  },

  colors: {
    accent: "#6a5acd",
    white: "#FFFFFF",
  },
};

export type MyProps = {
  theme?: typeof theme;
};
