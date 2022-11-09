import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface FormOptionProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  children?: ReactNode;
  handleChangeCallback: Function;
  state: string;
}

export function FormOption({
  name,
  label,
  placeholder,
  type,
  children,
  handleChangeCallback,
  state
}: FormOptionProps) {
  return (
    <Box>
      <FormControl id={name}>
        <FormLabel fontWeight="bold">{label}</FormLabel>
        <Input
          placeholder={placeholder}
          borderColor="lightGray"
          borderRadius="0.25rem"
          height="3.25rem"
          type={type}
          _hover={{
            borderColor: "#000",
          }}
          value={state}
          onChange={event => handleChangeCallback(event.currentTarget.value)}
        />
        {children}
      </FormControl>
    </Box>
  );
}
