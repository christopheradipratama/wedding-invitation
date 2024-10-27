import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";

interface Props extends HeadingProps {
  title: string;
}

export const Heading = ({ title, ...props }: Props) => (
  <ChakraHeading
    as="h1"
    size={["2xl", "3xl", "4xl", "5xl"]}
    textTransform="uppercase"
    letterSpacing={["wide", "wider", "widest"]}
    fontWeight="light"
    fontFamily="Butler"
    {...props}
  >
    {title}
  </ChakraHeading>
);
