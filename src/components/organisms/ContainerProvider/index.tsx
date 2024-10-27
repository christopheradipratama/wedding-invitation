"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/assets/themes/theme";

export default function ContainerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
