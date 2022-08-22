import { Box, Link } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'

  interface FormOptionProps{
    label: string,
    placeholder: string
  }

export function FormOption({label, placeholder}: FormOptionProps) {
    return (
        <>
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
        </>
    );
}