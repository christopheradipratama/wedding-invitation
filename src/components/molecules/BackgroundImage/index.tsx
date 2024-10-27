import { Box, Image } from "@chakra-ui/react";

interface BackgroundImageProps {
  src: string;
  alt: string;
}

export const BackgroundImage = ({ src, alt }: BackgroundImageProps) => (
  <Box position="relative" w="100%" h="100%">
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      objectPosition="center"
      w="100%"
      h="100%"
      filter="brightness(70%)"
    />
    <Box
      position="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5))"
    />
  </Box>
);
