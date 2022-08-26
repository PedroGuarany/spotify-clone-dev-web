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
} from "@chakra-ui/react";
import { Button } from "../Common/DefaultButton";

export function FormRegister() {
  return (
    <Box width="100%" paddingBottom="8.125rem">
      <Flex direction="column" gap="1.5rem">
        <FormOption
          label="Qual é o seu e-mail?"
          placeholder="Insira seu e-mail"
          type="email"
        >
          <FormHelperText color="#117a37" textDecoration="underline">
            <Link href="#">Usar número de telefone.</Link>
          </FormHelperText>
        </FormOption>

        <FormOption
          label="Confirme seu e-mail"
          placeholder="Insira o email novamente."
          type="email"
        />

        <FormOption
          label="Como devemos chamar você?"
          placeholder="Insira um nome de perfil"
          type="text"
        >
          <FormHelperText>Isso aparece no seu perfil.</FormHelperText>
        </FormOption>

        <FormOption
          label="Qual a sua data de nascimento?"
          placeholder=""
          type="date"
        />

        <RadioGroup>
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
