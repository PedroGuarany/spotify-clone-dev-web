import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { NavigationOption } from "../Common/NavigationOption";

interface FaqOptionProps {
    link: string,
    text: string
}

export function FaqOption({ link, text }: FaqOptionProps) {
    return (
        <Flex justify="space-between" w="full" align="center">
            <NavigationOption link={link} color="#fff" fontSize={["0.8rem", "0.8rem", "0.8rem", "1.2rem"]}
                textAlign={["center", "center", "center", "left"]} fontWeight="700">{text}</NavigationOption>
            <ChevronRightIcon color="white" h="10" boxSize={["1.5rem", "1.5rem", "1.5rem", "2em"]} />
        </Flex>
    );
}