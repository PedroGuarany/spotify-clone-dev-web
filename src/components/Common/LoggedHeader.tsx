import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, List, Text, UnorderedList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export function LoggedHeader() {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);


  function handleLogout(){
    if (localStorage)
      localStorage.clear();
    if (sessionStorage)
      sessionStorage.clear();

    router.push("/");
  }

  function handleEditProfile(){
    router.push("/profile/edit");
  }
  function Options(){
    if(!showOptions)
      return null;
    return (
      <UnorderedList backgroundColor="#282828" width="min-content" borderRadius="0.25rem" gap="1rem">
          <Button minWidth="12rem" backgroundColor="transparent" color="white" _hover={{backgroundColor: "hsla(0,0%,100%,.1)"}} onClick={() => {handleEditProfile()}}>Editar</Button>
          <Button minWidth="12rem" backgroundColor="transparent" color="white" _hover={{backgroundColor: "hsla(0,0%,100%,.1)"}} onClick={() => handleLogout()}>Sair</Button>
      </UnorderedList>);
  }
  return (
    <>
      <Box
        padding="16px 32px"
        width="100%"
        background="rgba(255, 255, 255, 0)"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="sticky"
        top="0"
      >
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Box display="flex" justifyContent="space-between" width="80px">
            <Button
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="rgba(0,0,0,.7)"
              padding="0"
              minWidth="32px"
              height="32px"
              borderRadius="50%"
              opacity=".6"
              _hover={{}}
              onClick={() => window.history.back()} 
            >
              <Image src="/assets/icons/arrowIcon.svg" alt="Seta"></Image>
            </Button>
            <Button
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="rgba(0,0,0,.7)"
              padding="0"
              minWidth="32px"
              height="32px"
              borderRadius="50%"
              opacity=".6"
              transform={"rotate(180deg)"}
              _hover={{}}
              onClick={() => window.history.forward()}
            >
              <Image src="/assets/icons/arrowIcon.svg" alt="Seta"></Image>
            </Button>
          </Box>
          <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            padding="0"
            width="fit-content"
            height="32px"
            backgroundColor="rgba(0,0,0,.7)"
            borderRadius="23px"
            _hover={{ backgroundColor: "#282828" }}
            onClick={() => {setShowOptions(!showOptions)}}
          >
            <Image src="/assets/playlist/defaultperfil.svg" alt="Imagem de perfil" borderRadius="50%"></Image>
            <Text fontSize="14px" fontWeight="700" color="#fff">
              {localStorage ? localStorage.getItem("name") : sessionStorage ? sessionStorage.getItem("name") : "Usuário"}
            </Text>
            <TriangleDownIcon color="white" height="10px" />
          </Button>
        </Flex>
        <Options/>  
      </Box>
    </>
  );
}
