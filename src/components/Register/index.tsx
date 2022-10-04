import { Flex } from "@chakra-ui/react";
import { FormRegister } from "./FormRegister";
import { HeaderRegister } from "./HeaderRegister";

export function Register() {
    return (
        <>
        <Flex align="center"
        justify="center"
        flexDirection="column"
        margin="0 auto"
        width="28rem"
        paddingRight={[23, 23, 23, 0]}
        paddingLeft={[23, 23, 23, 0]}>
            <HeaderRegister />
            <FormRegister />
        </Flex>
        </>
    );
}