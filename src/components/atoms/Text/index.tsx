import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface TextProps extends ChakraTextProps {
  children: ReactNode;
}

export const Text = ({ children, ...props }: TextProps) => (
  <ChakraText {...props}>{children}</ChakraText>
);
