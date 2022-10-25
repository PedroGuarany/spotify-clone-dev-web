import { FormOption } from "../Register/FormOption";
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
import { useEffect, useState } from "react";
import {useRouter} from 'next/router'
import { NavigationOption } from "../Common/NavigationOption";
import api from "../../api";

interface FormProps{
  email: string;
  name: string;
  birthdate: string;
}

export function FormEditProfile() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const toast = useToast();
  const [id, setId] = useState("");
  
  useEffect(() => {
    api.get(`/users?email=${localStorage.getItem("email") ?? sessionStorage.getItem("email")}`).then((response) => {
      setEmail(response.data[0].email);
      setName(response.data[0].name);
      setGender(response.data[0].gender);
      setId(response.data[0].id);
    })
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    if(!email || !name || !gender){
      toast({ title: "Registro",  description: "Por favor, preencha todos os campos", duration : 3000, status: "error", position: "top-right"});
      return;
    }

    api.patch(`/users/${id}`,
      {
        email: email,
        name: name,
        gender: gender,
      }
    ).then(() => {
      setEmail("");
      setGender("1");
      setName("");
      
      if(sessionStorage && sessionStorage.getItem("name")){
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("gender", gender);
      }
      if(localStorage && localStorage.getItem("name")){
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("gender", gender);
      }
      toast({title: "Registro", description: "Edição realizada", status: "success", duration: 3000, isClosable: true, position: "top-right"})
      
      router.push("/playlists");
    }).catch((e) => {
      toast({ title: "Registro",  description: "Houve um erro no cadastro", duration : 3000, status: "error", position: "top-right"});
    });
  }
  return (
    <Box width="100%" paddingTop="2rem" paddingBottom="8.125rem">
      <Flex direction="column" gap="1.5rem" as="form" onSubmit={handleSubmit}>
        <FormOption
          name="email"
          label="Qual é o seu e-mail?"
          placeholder="Insira seu e-mail"
          type="email"
          state={email}
          handleChangeCallback={setEmail}
        >
          <FormHelperText color="#117a37" textDecoration="underline">
            <Link href="#">Usar número de telefone.</Link>
          </FormHelperText>
        </FormOption>

        <FormOption
          name="name"
          label="Como devemos chamar você?"
          placeholder="Insira um nome de perfil"
          type="text"
          state={name}
          handleChangeCallback={setName}
        >
          <FormHelperText>Isso aparece no seu perfil.</FormHelperText>
        </FormOption>

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

        <Box gap="0.75rem">
          <Flex justifyContent="space-around" paddingBottom="1.5rem">
            <Button
              fontSize="1rem"
              fontWeight="900"
              width="10rem"
              height="3.2rem"
              text="Editar"
              color="greenX.100"
              fontColor="black"
              type="submit"
            ></Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
