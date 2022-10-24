import { Box, Checkbox, FormHelperText, Heading, Link } from "@chakra-ui/react";
import { FormOption } from "../Register/FormOption";
import { Button } from "../Common/DefaultButton";
import { Line } from "../Common/Line";

export function LoginComponent() {
  return (
    <Box width={"100%"} display="flex" flexDirection="column" gap="16px">
      <FormOption
        name={"email"}
        label={"Digite seu e-mail ou nome de usuário"}
        placeholder={"Digite seu e-mail ou nome de usuário"}
        type={"text"}
        handleChangeCallback={undefined}
      ></FormOption>

      <FormOption
        name={"password"}
        label={"Senha"}
        placeholder={"Senha"}
        type={"password"}
        handleChangeCallback={undefined}
      >
        <FormHelperText fontSize="16px">
          <Link href="#">Esqueceu sua senha?</Link>
        </FormHelperText>
      </FormOption> 
      <Box display="flex" justifyContent="space-between">
        <Checkbox size="md" colorScheme="green" defaultChecked>
            Lembrar de mim
        </Checkbox>
        <Button
          text="Entrar"
          color="greenX.100"
          fontColor="black"
          width="auto"
          textTransform="uppercase"
          letterSpacing="2px"
          fontWeight="bold"
        ></Button>
      </Box>
      <Line />
      <Box>
        <Heading fontSize="18px" textAlign="center" fontWeight="900" paddingBottom="16px">Não tem uma conta?</Heading>
        <Button text="Inscrever-se no spotify" color="transparent" fontColor="#6a6a6a" border="1px solid #878787" padding="14px 32px" letterSpacing="2px" textTransform="uppercase" width="100%" height="48px"></Button>
      </Box>
    </Box>
  );
}
