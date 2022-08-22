import { Box, Link } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'

  export function FormRegister() {
    return (
        <>
        <Box display="flex" flexDirection="column" width="28rem">
          <Box paddingBottom="1.5rem">
            <FormControl>
              <FormLabel fontWeight="bold">
                  Qual é o seu e-mail?
              </FormLabel>
              <Input placeholder="Insira seu e-mail." borderColor="lightGray" borderRadius="4px" height="52px"  type='email'
                _hover={{
                borderColor: "#000",
                }} />
              <FormHelperText>
                <Link color="#117a37" href="#" textDecoration="underline">Usar número de telefone.</Link>
              </FormHelperText>
            </FormControl>
          </Box>
          <Box paddingBottom="24px">
            <FormControl>
              <FormLabel fontWeight="bold">
                Confirme seu e-mail
              </FormLabel>
              <Input placeholder="Insira o e-mail novamente." borderColor="lightGray" borderRadius="4px" height="52px"  type='email'
                _hover={{
                borderColor: "#000",
                }} />
            </FormControl>
          </Box>
          <Box paddingBottom="24px">
            <FormControl>
              <FormLabel fontWeight="bold">
                Crie uma senha
              </FormLabel>
              <Input placeholder="Crie uma senha." borderColor="lightGray" borderRadius="4px" height="52px"  type='email'
                _hover={{
                borderColor: "#000",
                }} />
            </FormControl>
          </Box>
          <Box paddingBottom="24px">
            <FormControl>
              <FormLabel fontWeight="bold">
                Como devemos chamar você?
              </FormLabel>
              <Input placeholder="Insira um nome de perfil." borderColor="lightGray" borderRadius="4px" height="52px"  type='email'
                _hover={{
                borderColor: "#000",
                }} />
              <FormHelperText color="rgb(24, 24, 24)">
                Isso aparece no seu perfil.
              </FormHelperText>
            </FormControl>
          </Box>
        </Box>
        </>
    );
}