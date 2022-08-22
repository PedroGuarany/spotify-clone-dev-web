import { Text as ChakraText, TextProps } from "@chakra-ui/react";

interface MenuTextProps extends TextProps {
  text: string;
}

export function Text({ text, ...rest }: MenuTextProps) {
  return (
      <ChakraText
        fontSize="0.9375rem;"
        fontWeight="bold"
        cursor="pointer"
        color="#fff"
        _hover={{
          color: "#1ED760",
        }}
        textDecoration="none"
        {...rest}
      >
        {text}
      </ChakraText>
  );
}