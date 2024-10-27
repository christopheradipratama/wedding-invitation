import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Box, VStack } from "@chakra-ui/react";

export const TitleBlock = ({ ...props }) => (
  <VStack alignItems="flex-start" spacing={4} color="white" {...props}>
    <Text
      as="b"
      fontSize="m"
      textTransform="uppercase"
      letterSpacing="widest"
      fontFamily="Poppins"
      animation="slideUp 1s ease forwards"
    >
      Wedding Announcement
    </Text>
    <Box marginTop="2rem">
      <Heading size="4xl" title="Tiffany &" />
      <Heading size="4xl" title="JARED" />
    </Box>
  </VStack>
);
