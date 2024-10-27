import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: Props) => (
  <ChakraButton {...props}>{children}</ChakraButton>
);
