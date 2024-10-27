import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/newsreader";

const theme = extendTheme({
  fonts: {
    heading: "Butler, sans-serif",
    body: "Poppins, sans-serif",
    quote: "Newsreader, serif",
  },
});

export default theme;
