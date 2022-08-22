import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { NavigationOption } from "../Common/NavigationOption";

interface FaqOptionProps{
    link: string,
    text: string
}

export function FaqOption({link, text}: FaqOptionProps){
    return (
        <Flex justify="space-between" w="full" align="center">
            <NavigationOption link={link} color="#fff" fontSize="1.2rem" fontWeight="700" style={{textDecoration: "underline"}}>{text}</NavigationOption>
            <ChevronRightIcon color="white" h="10" boxSize="2em"/>
        </Flex>
    );
}