import { FormOption } from "./FormOption";
import {
  FormHelperText,
  Box,
  Flex,
  Radio,
  RadioGroup,
  FormLabel,
  Checkbox,
  Link,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { Button } from "../Common/DefaultButton";
import { useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import {useRouter} from 'next/router'

interface FormProps{
  email: string;
  name: string;
  birthdate: string;
}

export function FormRegister() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("1");
  const toast = useToast();
   
  const handleSubmit = event => {
    event.preventDefault();
    if(email == "" || confirmationEmail == "" || name == "" || birthdate == "" || gender == ""){
      toast({ title: "Registro",  description: "Por favor, preencha todos os campos", duration : 3000, status: "error", position: "top-right"});
      return;
    }

    if(email != confirmationEmail){
      toast({ title: "Registro",  description: "Os emails não são idênticos", duration : 3000, status: "warning", position: "top-right"});
      return;
    }
  
    toast({title: "Registro", description: "Cadastro realizado", status: "success", duration: 3000, isClosable: true, position: "top-right"})
    setEmail("");
    setBirthdate("");
    setGender("1");
    setConfirmationEmail("");
    setName("");

    console.log({
      email: email,
      name: name,
      birthdate: birthdate,
      gender: gender
    })
    router.push("/");
  }
  return (
    <Box width="100%" paddingBottom="8.125rem">
      <Flex direction="column" gap="1.5rem" as="form" onSubmit={handleSubmit}>
        <FormOption
          name="email"
          label="Qual é o seu e-mail?"
          placeholder="Insira seu e-mail"
          type="email"
          handleChangeCallback={setEmail}
        >
          <FormHelperText color="#117a37" textDecoration="underline">
            <Link href="#">Usar número de telefone.</Link>
          </FormHelperText>
        </FormOption>

        <FormOption
          name="emailConfirmation"
          label="Confirme seu e-mail"
          placeholder="Insira o email novamente."
          type="email"
          handleChangeCallback={setConfirmationEmail}
        />

        <FormOption
          name="name"
          label="Como devemos chamar você?"
          placeholder="Insira um nome de perfil"
          type="text"
          handleChangeCallback={setName}
        >
          <FormHelperText>Isso aparece no seu perfil.</FormHelperText>
        </FormOption>

        <FormOption
          name="birthdate"
          label="Qual a sua data de nascimento?"
          placeholder=""
          type="date"
          handleChangeCallback={setBirthdate}
        />

        <RadioGroup onChange={setGender} value={gender}>
          <FormLabel fontWeight="bold">Qual é o seu gênero?</FormLabel>
          <Flex gap="2.5rem">
            <Radio size="md" colorScheme="green" value="1">
              Masculino
            </Radio>
            <Radio size="md" colorScheme="green" value="2">
              Feminino
            </Radio>
            <Radio size="md" colorScheme="green" value="3">
              Não binário
            </Radio>
          </Flex>
        </RadioGroup>

        <Checkbox size="md" colorScheme="green" defaultChecked>
          Não quero receber mensagens de marketing do Spotify
        </Checkbox>
        <Checkbox size="md" colorScheme="green" defaultChecked>
          Compartilhar meus dados cadastrais com os provedores de conteúdo do
          Spotify para fins de marketing.
        </Checkbox>
        <Checkbox size="md" colorScheme="green" defaultChecked>
          Eu concordo com os{" "}
          <Link color="#117a37" textDecoration="underline" href="#">
            Termos e Condições de Uso do Spotify.
          </Link>
        </Checkbox>

        <Box gap="0.75rem">
          <Text textAlign="center" fontSize="0.75rem">
            Para saber mais sobre como o Spotify coleta, utiliza, compartilha e
            protege seus
            <br /> dados pessoais, leia a{" "}
            <Link
              textDecoration="underline"
              color="#1db954"
              _hover={{ color: "#1ed760" }}
              href="#"
            >
              Política de Privacidade do Spotify.
            </Link>
          </Text>
          <Flex justifyContent="space-around" paddingBottom="1.5rem">
            <Button
              fontSize="1rem"
              fontWeight="900"
              width="10rem"
              height="3.2rem"
              text="Inscrever-se"
              color="greenX.100"
              fontColor="black"
              type="submit"
            ></Button>
          </Flex>
          <Text textAlign="center">
            Já tem uma conta?{" "}
            <Link
              textDecoration="underline"
              color="#1db954"
              _hover={{ color: "#1ed760" }}
              href="#"
            >
              Faça login.
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
