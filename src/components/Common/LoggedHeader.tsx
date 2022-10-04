import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export function LoggedHeader() {
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
            width="115.47px"
            height="32px"
            backgroundColor="rgba(0,0,0,.7)"
            borderRadius="23px"
            _hover={{ backgroundColor: "#282828" }}
          >
            <Image src="/assets/playlist/defaultperfil.svg" alt="Imagem de perfil" borderRadius="50%"></Image>
            <Text fontSize="14px" fontWeight="700" color="#fff">
              moises
            </Text>
            <TriangleDownIcon color="white" height="10px" />
          </Button>
        </Flex>
      </Box>
    </>
  );
}
