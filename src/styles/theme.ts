import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    greenX: {
      100: "#1ED760",
    },
    darkGreen: "#157a39",
    darkGray: "#919496"
  },
  fonts: {
    heading: "lato",
    body: "lato",
  },
  styles: {
    global: {
      body: {
        overflowX: "hidden",
      },
    },
  },
  textStyles:{
    defaultText: {
      color: "white",
    }
  }
});
