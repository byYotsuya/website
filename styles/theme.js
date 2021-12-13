import { ChakraProvider, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "red",
    components: ['Tag'],
  }),
  {
    fonts: {
      heading: "Poppins",
      body: "Roboto",
    },
    sizes: {
      container: {
        "2xl": "1440px",
      },
    },
  }
);

export { ChakraProvider as ThemeProvider };
export default theme;