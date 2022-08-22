import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavigationOptionProps {
  link: string;
  children?: ReactNode;
}

export function NavigationOption({ link, children}: NavigationOptionProps) {
  return (
    <NextLink href={link} passHref>
      <Link style={{ textDecoration: "none" }}>
        {children}
      </Link>
    </NextLink>
  );
}
