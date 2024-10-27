import "../assets/styles/globals.css";

import type { Metadata } from "next";
import ContainerProvider from "@/components/organisms/ContainerProvider";
import { Images } from "@/assets/images";

export const metadata: Metadata = {
  title: "The Wedding of Tiffany & Jared by Invitato",
  description: "The wedding website of Tiffany & Jared by Invitato.",
  icons: [{ url: Images.Logo.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ContainerProvider>{children}</ContainerProvider>
      </body>
    </html>
  );
}
