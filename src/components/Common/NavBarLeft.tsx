import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function NavBarLeft() {
  return (
    <Box
      backgroundColor="#000"
      minWidth="393px"
      paddingTop="15px"
      zIndex="3"
      position="relative"
      height="100%"
    >
      <Flex flexDirection="column">
        <Flex>
          <Logo />
        </Flex>
        <Box>
            <NavBarLeftItems src={"assets/icons/homeIcon.svg"} alt={"Ícone do home"} text={"Início"}></NavBarLeftItems>
            <NavBarLeftItems src={"assets/icons/searchIcon.svg"} alt={"Ícone da lupa de pesquisa"} text={"Buscar"}></NavBarLeftItems>
            <NavBarLeftItems src={"assets/icons/library.svg"} alt={"Ícone do home"} text={"Sua Biblioteca"}></NavBarLeftItems>
        </Box>

        <Box paddingTop="24px">
            <NavBarLeftItems src={"assets/icons/moreIcon.svg"} alt={"Icone de adicionar mais"} text={"Criar Playlist"}></NavBarLeftItems>
            <NavBarLeftItems src={"assets/icons/heartIcon.svg"} alt={"Icone de da opção de músicas curtidas"} text={"Músicas Curtidas"}></NavBarLeftItems>
        </Box>

        <Box paddingTop="24px" width="100%" height="4px" display="flex" justifyContent="center">
          <Box background="#282828" height="1px" width="326px"></Box>
        </Box>

      </Flex>
    </Box>
  );
}

const NavBarLeftItems = ({src, alt, text}) => {
    return (
        <>
        <Link display="flex" alignItems="center" flexDirection="row" gap="16px" padding="18px 36px 0 36px" height="40px" href="/playlist" color="#C7C7C7"  _hover={{ color: 'white' }}>
        <Image src={src} alt={alt} />
        <Text fontSize="14px" fontWeight="bold">
            {text}
        </Text>
        </Link>
        </>
    );
}
