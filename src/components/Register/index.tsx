import { Flex } from "@chakra-ui/react";
import { FormRegister } from "./FormRegister";
import { HeaderRegister } from "./HeaderRegister";

export function Register() {
    return (
        
        <>
        <Flex align="center"
        justify="center"
        flexDirection="column">
        <HeaderRegister />
        <FormRegister />
        </Flex>
        </>
    );
}