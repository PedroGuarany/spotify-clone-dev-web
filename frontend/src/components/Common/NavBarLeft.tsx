import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import api from "../../api";
import { Logo } from "./Logo";
import { NavigationOption } from "./NavigationOption";

export function NavBarLeft() {
  const router = useRouter();
  
  const handleCreatePlaylist = () => {
    api.post("/playlists", {
      name: "Nova playlist",
      musics: []
    }).then((response) => {
      router.push(`/playlist/${response.data.id}`);
    });
  }
  return (
    <Box
      backgroundColor="#000"
      minWidth="393px"
      paddingTop="15px"
      position="relative"
      height="100%"
      zIndex="3"
    >
      <Flex flexDirection="column">
        <Flex>
          <Logo />
        </Flex>
        <Box>
          <NavBarLeftItems
            src={"/assets/icons/homeIcon.svg"}
            alt={"Ícone do home"}
            text={"Início"}
            link={"/playlists"}
          ></NavBarLeftItems>
          <NavBarLeftItems
            src={"/assets/icons/searchIcon.svg"}
            alt={"Ícone da lupa de pesquisa"}
            text={"Buscar"}
            link={"/search"}
          ></NavBarLeftItems>
          <NavBarLeftItems
            src={"/assets/icons/library.svg"}
            alt={"Ícone do home"}
            text={"Sua Biblioteca"}
            link={""}
          ></NavBarLeftItems>
        </Box>

        <Box paddingTop="24px">
          <NavBarLeftItems
            src={"/assets/icons/moreIcon.svg"}
            alt={"Icone de adicionar mais"}
            text={"Criar Playlist"}
            link={""}
            onClick={handleCreatePlaylist}
          ></NavBarLeftItems>
          <NavBarLeftItems
            src={"/assets/icons/heartIcon.svg"}
            alt={"Icone de da opção de músicas curtidas"}
            text={"Músicas Curtidas"}
            link={"/"}
          ></NavBarLeftItems>
        </Box>

        <Box
          paddingTop="24px"
          width="100%"
          height="4px"
          display="flex"
          justifyContent="center"
        >
          <Box background="#282828" height="1px" width="326px"></Box>
        </Box>
      </Flex>
    </Box>
  );
}

interface NavBarLeftItemsProps {
  src: string;
  alt: string;
  text: string;
  link: string;
  onClick?: () => void;
}
const NavBarLeftItems = ({ src, alt, text, link, onClick} : NavBarLeftItemsProps) => {
  return (
    <>
      <NavigationOption
        display="flex"
        alignItems="center"
        flexDirection="row"
        gap="16px"
        padding="18px 36px 0 28px"
        height="40px"
        link={link}
        color="#C7C7C7"
        onClick={onClick}
        _hover={{ color: "white" }}
      >
        <Image src={src} alt={alt} />
        <Text fontSize="14px" fontWeight="bold">
          {text}
        </Text>
      </NavigationOption>
    </>
  );
};
