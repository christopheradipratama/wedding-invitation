import { LeftSection } from "@/components/organisms/LeftSection";
import { RightSection } from "@/components/organisms/RightSection";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      height="100vh"
      overflow="auto"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <LeftSection />
      <RightSection />
    </Flex>
  );
}
