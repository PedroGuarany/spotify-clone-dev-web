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
  label: string;
  placeholder: string;
  type: string;
  children?: ReactNode;
}

export function FormOption({
  label,
  placeholder,
  type,
  children,
}: FormOptionProps) {
  return (
    <Box>
      <FormControl>
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
        />
        {children}
      </FormControl>
    </Box>
  );
}
