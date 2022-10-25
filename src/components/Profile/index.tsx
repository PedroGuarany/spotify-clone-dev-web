import { Flex } from "@chakra-ui/react";
import { HeaderRegister } from "../Register/HeaderRegister";
import { FormEditProfile } from "./FormEdit";

export function EditProfileComponent(){
    return (
        <Flex align="center"
        justify="center"
        flexDirection="column"
        margin="0 auto"
        width="28rem"
        paddingRight={[23, 23, 23, 0]}
        paddingLeft={[23, 23, 23, 0]}>
            <HeaderRegister text={"Editar informações do perfil"} />
            <FormEditProfile />
        </Flex>
    );
}