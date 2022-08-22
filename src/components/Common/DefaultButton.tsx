import { Button as ChakraButton } from "@chakra-ui/react";

interface DefaultButtonProps{
    text: string,
    color: string,
    fontColor: string
}
export function Button({text, color, fontColor}: DefaultButtonProps){
    return(
        <ChakraButton
                bgColor={color}
                variant="solid"
                fontSize="0.875rem"
                fontWeight="bold"
                color={fontColor}
                padding="1.2rem 2rem"
                marginTop="1rem"
                borderRadius="2rem"
                textStyle="defaultText"
                _hover={{ transform: "scale(1.04)" }}
                width={["15rem", "20rem", "20rem", "20rem", "20rem"]}
                textAlign={["center", "center", "center", "start"]}
              >
                {text}
              </ChakraButton>
    );
}