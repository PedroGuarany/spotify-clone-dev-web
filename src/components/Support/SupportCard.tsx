import { Box, Flex, Image } from "@chakra-ui/react";
import { Text } from "../Common/DefaultText";

interface SupportCardProps{
    text: string,
    image: string,
    link: string,
    bgColor: string
}
export function SupportCard({text, image, link, bgColor}: SupportCardProps){
    return (
        <Box
            bg={bgColor}
            borderRadius="0.25rem"
            h="6rem"
            maxWidth="12rem" position="relative" overflow="hidden">
                <Flex gap="2rem" maxWidth="100%">
                    <Text text={text} padding="1rem" fontSize="1.2rem" fontWeight="bold" maxWidth="10rem"></Text>
                    <Image src={image} alt={text} transform="rotate(25deg)" boxShadow="rgb(0 0 0 / 20%) 0px 2px 4px 0px" position="absolute" top="2rem" left="9rem"/> 
                </Flex>
        </Box>
    );
}