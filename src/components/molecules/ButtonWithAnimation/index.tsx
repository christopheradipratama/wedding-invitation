import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonWithAnimationProps extends ButtonProps {
  title: string;
}

export const ButtonWithAnimation = ({
  title,
  ...props
}: ButtonWithAnimationProps) => (
  <Button
    outline="2px solid transparent"
    outlineOffset="2px"
    lineHeight="1.2"
    transition="all 0.2s ease"
    height="8"
    minWidth="8"
    paddingX="2.4rem"
    fontFamily="Newsreader, serif"
    fontWeight="normal"
    fontSize="lg"
    fontStyle="italic"
    bg="gray.100"
    color="gray.900"
    borderRadius="0"
    borderWidth="1px"
    borderStyle="solid"
    borderColor="#1A1B1D"
    animation="bounce 2s infinite"
    _hover={{
      bg: "gray.200",
    }}
    {...props}
  >
    {title}
  </Button>
);
