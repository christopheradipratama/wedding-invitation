"use client";

import { Images } from "@/assets/images";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { BackgroundImage } from "@/components/molecules/BackgroundImage";
import { ButtonWithAnimation } from "@/components/molecules/ButtonWithAnimation";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { Box, VStack, Image, IconButton, HStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const RightSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [manualImageIndex, setManualImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const WelcomeImages = [
    Images.WelcomeSection.First.src,
    Images.WelcomeSection.Second.src,
    Images.WelcomeSection.Third.src,
    Images.WelcomeSection.Fourth.src,
    Images.WelcomeSection.Fifth.src,
  ];

  const handleOpen = () => {
    setIsLoading(true);
    if (audioRef.current) {
      audioRef.current.play();
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsOpened(true);
    }, 1000);
  };

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isOpened) {
      const interval = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === WelcomeImages.length - 1 ? 0 : prevIndex + 1
          );
          setIsFading(false);
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isOpened, WelcomeImages.length]);

  const handlePrev = () => {
    setManualImageIndex((prevIndex) =>
      prevIndex === 0 ? WelcomeImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setManualImageIndex((prevIndex) =>
      prevIndex === WelcomeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImageIndex =
    manualImageIndex === 0 ? WelcomeImages.length - 1 : manualImageIndex - 1;
  const nextImageIndex =
    manualImageIndex === WelcomeImages.length - 1 ? 0 : manualImageIndex + 1;

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <Box
      ref={containerRef}
      flex="1"
      width={{ base: "100%", lg: "550px" }}
      height="100%"
      display="flex"
      justifyContent="center"
      position="relative"
      overflowY="auto"
      overflowX="hidden"
      marginLeft={{ lg: "calc(100% - 560px)" }}
      scrollBehavior="smooth"
    >
      {isOpened ? (
        <Box
          position="relative"
          width="100%"
          height="100%"
          animation="slideUpWelcome 0.8s ease-in-out forwards"
          key="carouselBox"
        >
          <VStack spacing={0} width="100%" height="100%">
            <Box position="relative" bg="#000">
              <Image
                src={WelcomeImages[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                width="100vh"
                height="100vh"
                objectFit="cover"
                opacity={isFading ? 0 : 1}
                transition="opacity 0.5s ease-in-out, transform 30s ease-in-out"
                filter="brightness(70%)"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                color="white"
                textAlign="center"
                paddingX="2rem"
                paddingY="6rem"
              >
                <Text
                  as="b"
                  fontSize="large"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  fontFamily="Poppins"
                >
                  Wedding Announcement
                </Text>
                <Heading marginTop="12rem" size="xl" title="Tiffany & JARED" />
                <Text
                  as="i"
                  fontSize="3xl"
                  fontFamily="Newsreader, serif"
                  fontWeight="light"
                >
                  #TImetoshaRE
                </Text>
                <Box
                  display="flex"
                  marginTop="14rem"
                  justifyContent="flex-end"
                  width="100%"
                  onClick={scrollToBottom}
                  cursor="pointer"
                >
                  <Text
                    as="b"
                    fontSize="xl"
                    fontFamily="Poppins"
                    textAlign="right"
                  >
                    Scroll To Begin
                    <ChevronDownIcon marginLeft="0.5rem" />
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box
              flex="1"
              width="100%"
              height="120vh"
              bg="#FFF"
              padding="2rem"
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              marginY="2rem"
            >
              <Text
                as="b"
                fontSize="sm"
                color="black"
                mb="1rem"
                fontFamily="Poppins"
                textAlign="center"
              >
                DEAR MR - MRS - MS,
                <br />
                FAMILY & FRIENDS
              </Text>
              <Heading
                fontWeight="800"
                size="xl"
                title="Welcome To"
                textAlign="center"
                marginTop="2rem"
              />
              <Heading
                fontWeight="800"
                size="xl"
                title="Tiffany & Jared's"
                textAlign="center"
              />
              <Heading
                fontWeight="800"
                size="xl"
                title="Wedding Website"
                textAlign="center"
              />
              <Text
                as="i"
                fontSize="xl"
                fontFamily="Newsreader, serif"
                fontWeight="light"
                textAlign="center"
                marginTop="2rem"
              >
                Together with joyful hearts and the grace of God, we joyfully
                announce the upcoming of our marriage.
              </Text>

              <Box position="relative" width="100%" mt="4rem">
                <HStack justifyContent="center" alignItems="center" spacing={4}>
                  <Image
                    src={WelcomeImages[prevImageIndex]}
                    alt={`Previous Slide`}
                    width="200px"
                    height="300px"
                    objectFit="cover"
                    boxShadow="sm"
                    style={{ transform: "scale(0.9)" }}
                  />
                  <Image
                    src={WelcomeImages[manualImageIndex]}
                    alt={`Carousel Slide ${manualImageIndex + 1}`}
                    width="200px"
                    height="300px"
                    objectFit="cover"
                    boxShadow="lg"
                    transition="transform 0.5s ease-in-out"
                  />
                  <Image
                    src={WelcomeImages[nextImageIndex]}
                    alt={`Next Slide`}
                    width="200px"
                    height="300px"
                    objectFit="cover"
                    boxShadow="sm"
                    style={{ transform: "scale(0.9)" }}
                  />
                </HStack>
                <Box display="flex" justifyContent="flex-end" marginTop="2rem">
                  <HStack spacing="2rem">
                    <IconButton
                      paddingX="2rem"
                      icon={<ArrowBackIcon />}
                      onClick={handlePrev}
                      aria-label="Previous Image"
                    />
                    <IconButton
                      paddingX="2rem"
                      icon={<ArrowForwardIcon />}
                      onClick={handleNext}
                      aria-label="Next Image"
                    />
                  </HStack>
                </Box>
              </Box>
            </Box>
          </VStack>
        </Box>
      ) : (
        <>
          <Box
            position="absolute"
            width="100%"
            height="100%"
            transform={isLoading ? "translateY(-100%)" : "translateY(0)"}
            transition="transform 0.5s ease-in-out"
          >
            <BackgroundImage src={Images.Cover.src} alt="Cover Image" />
          </Box>

          <VStack
            spacing={4}
            alignItems="center"
            color="white"
            paddingX="2rem"
            paddingY="6rem"
            textAlign="center"
            zIndex="1"
            transform={isLoading ? "translateY(-100%)" : "translateY(0)"}
            transition="transform 0.5s ease-in-out"
          >
            <Text
              as="b"
              fontSize={{ base: "sm", md: "m" }}
              textTransform="uppercase"
              letterSpacing="widest"
              fontFamily="Poppins"
            >
              Wedding Announcement
            </Text>
            <Heading marginTop="12rem" size="xl" title="Tiffany & JARED" />
            <Text
              as="i"
              fontSize="4xl"
              fontFamily="Newsreader, serif"
              fontWeight="light"
              marginTop="-1rem"
            >
              #TImetoshaRE
            </Text>
            <ButtonWithAnimation
              title="Open"
              marginTop="3rem"
              isLoading={isLoading}
              onClick={handleOpen}
            />
          </VStack>
        </>
      )}
      <audio ref={audioRef} src="/musics/wedding-music.mp3" />
    </Box>
  );
};
