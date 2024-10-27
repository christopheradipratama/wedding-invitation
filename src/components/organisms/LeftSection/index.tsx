"use client";

import { Images } from "@/assets/images";
import { BackgroundImage } from "@/components/molecules/BackgroundImage";
import { QuoteBlock } from "@/components/molecules/QuoteBlock";
import { TitleBlock } from "@/components/molecules/TitleBlock";
import { Box } from "@chakra-ui/react";

export const LeftSection = () => (
  <Box
    flex="1"
    position="fixed"
    top="0"
    bottom="0"
    left="0"
    width={{ base: "0%", lg: "calc(100% - 550px)" }}
    borderRightWidth="8px"
    borderRightStyle="solid"
    borderRightColor="blackAlpha.400"
    overflow="hidden"
    display={{ base: "none", lg: "block" }}
    zIndex="1"
  >
    <BackgroundImage src={Images.Desktop.src} alt="Desktop Image" />

    <Box position="absolute" top="6%" left="5%" color="white">
      <TitleBlock />
      <Box marginTop="1rem">
        <QuoteBlock />
      </Box>
    </Box>
  </Box>
);
