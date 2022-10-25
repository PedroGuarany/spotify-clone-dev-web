import { Box, Checkbox, FormControl, FormHelperText, Heading, Link, useCheckbox, useToast } from "@chakra-ui/react";
import { FormOption } from "../Register/FormOption";
import { Button } from "../Common/DefaultButton";
import { Line } from "../Common/Line";
import { NavigationOption } from "../Common/NavigationOption";
import { useState } from "react";
import { useRouter } from "next/router";
import api from "../../api";

export function LoginComponent() {
  const toast = useToast();
  const router = useRouter();

  if(sessionStorage)
    sessionStorage.clear();
  if(localStorage)
    localStorage.clear();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const handleSubmit = event => {
    event.preventDefault();


    if(!email || !password){ toast({ title: "Login",  description: "Por favor, preencha todos os campos", duration : 3000, status: "error", position: "top-right"}); return;}

    api.get(`/users?email=${email}`).then(response => {
      if(!response.data){
        toast({ title: "Login",  description: "Email não encontrado", duration : 3000, status: "error", position: "top-right"});
        return;
      }
      if(response.data[0].password != password){
        toast({ title: "Login",  description: "Senha incorreta", duration : 3000, status: "error", position: "top-right"});
        return;
      }

      if(remember){
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("name", response.data[0].name);
      }
      else{
        localStorage.clear();
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("name", response.data[0].name);
      }
        router.push("/playlists");
    })
  }

  return (
    <Box width={"100%"} display="flex" flexDirection="column" gap="16px" as="form" onSubmit={handleSubmit}>
      <FormOption
        name={"email"}
        label={"Digite seu e-mail ou nome de usuário"}
        placeholder={"Digite seu e-mail ou nome de usuário"}
        type={"email"}
        state={email}
        handleChangeCallback={setEmail}
      ></FormOption>

      <FormOption
        name={"password"}
        label={"Senha"}
        placeholder={"Senha"}
        type={"password"}
        state={password}
        handleChangeCallback={setPassword}
      >
        <FormHelperText fontSize="16px">
          <Link href="#" 
          onClick={() => toast({title: "Recuperação de senha", description: "Entre em contato com nosso suporte pelo email noreply@spotify.com", duration : 3000, status: "warning", position: "top-right"})}>
            Esqueceu sua senha?</Link>
        </FormHelperText>
      </FormOption> 
        <Box display="flex" justifyContent="space-between">
          <Checkbox size="md" colorScheme="green" isChecked={remember} onChange={(event) => setRemember(event.target.checked)}>
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
            type="submit"
          ></Button>
        </Box>
      <Line />
      <Box>
        <Heading fontSize="18px" textAlign="center" fontWeight="900" paddingBottom="16px">Não tem uma conta?</Heading>
        <NavigationOption link="register">
          <Button text="Inscrever-se no spotify" color="transparent" fontColor="#6a6a6a" border="1px solid #878787" padding="14px 32px" letterSpacing="2px" textTransform="uppercase" width="100%" height="48px"></Button>
        </NavigationOption>
      </Box>
    </Box>
  );
}
