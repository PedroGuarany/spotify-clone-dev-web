import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Divider,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  FlexProps
} from "@chakra-ui/react";
import { Logo } from "../Common/Logo";
import { NavigationOption } from "../Common/NavigationOption";
import { Text } from "../Common/DefaultText";

interface MenuProps extends FlexProps{
}

export function Menu({...rest}: MenuProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg="#000"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        {...rest}
      >
        <Flex flex={{ base: 1 }} justify={"space-around"} align="center">
          <Logo />

          <Flex
            display={{ base: "none", md: "flex" }}
            justify="center"
            align="center"
            direction={"row"}
            gap="2.5rem"
          >
            <NavbarItems />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 1, md: "auto" }}
          justify="flex-end"
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            colorScheme="white"
            icon={
              isOpen ? <CloseIcon w={3} h={3} color="white" _hover={{color: "#1ED760"}}/> : <HamburgerIcon w={5} h={5} color="white" _hover={{color: "#1ED760"}}/>
            }

          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack bg={"#000"} p={4} display={{ md: "none" }} >
          <Flex align="flex-end" direction="column" gap="1rem">
          <NavbarItems />
          </Flex>
        </Stack>
      </Collapse>
    </Box>
  );
}

const NavbarItems = () => {
  return (
    <>
      <NavigationOption link={"/premium"}>
        <Text text="Premium"></Text>
      </NavigationOption>
      <NavigationOption link={"/support"}>
        <Text text="Suporte"></Text>
      </NavigationOption>
      <NavigationOption link={"/"}>
        <Text text="Baixar"></Text>
      </NavigationOption>
      <Divider orientation="vertical" height="1rem"></Divider>
      <NavigationOption link={"/register"}>
        <Text text="Inscrever-se"></Text>
      </NavigationOption>
      <NavigationOption link={"/login"}>
        <Text text="Entrar"></Text>
      </NavigationOption>
    </>
  );
};
