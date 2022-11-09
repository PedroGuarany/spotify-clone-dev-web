import NextLink from "next/link";
import { Link, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavigationOptionProps extends LinkProps{
  link: string;
  children?: ReactNode;
}

export function NavigationOption({ link, children, ...rest}: NavigationOptionProps) {
  return (
    <NextLink href={link} passHref>
      <Link style={{ textDecoration: "none" }} {...rest}>
        {children}
      </Link>
    </NextLink>
  );
}
