import { Box, FormHelperText, Link } from "@chakra-ui/react";
import { FormOption } from "../Register/FormOption";
import {Button} from "../Common/DefaultButton"

export function LoginComponent() {
    return (
        <Box width={"28rem"} display="flex">
         <FormOption
            name={"email"}
            label={"Digite seu e-mail ou nome de usuário"}
            placeholder={"Digite seu e-mail ou nome de usuário"} 
            type={"text"} 
            handleChangeCallback={undefined}>
        </FormOption>

        <FormOption 
        name={"password"} 
        label={"Senha"} 
        placeholder={"Senha"} 
        type={"password"} 
        handleChangeCallback={undefined}>

        <FormHelperText><Link href="#">Esqueceu sua senha?</Link></FormHelperText>
        </FormOption>
        <Button text={"Entrar"} color={"greenX.100"} fontColor={"black"}></Button>
        </Box>

    );
}