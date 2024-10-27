import { Text } from "@/components/atoms/Text";
import { Box } from "@chakra-ui/react";

export const QuoteBlock = () => (
  <Box maxW="850px">
    <Text
      as="i"
      fontFamily="Newsreader, serif"
      fontWeight="thin"
      letterSpacing="wider"
      color="white"
      animation="slideUp 1s ease forwards"
    >
      &quot;Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
      diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu
      dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada
      hujan yang menjadikannya tiada.&quot;
      <br />- Sapardi Djoko Damono
    </Text>
  </Box>
);
