import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import { NavBarLeft } from "../Common/NavBarLeft";
import { PlayingNow } from "../Common/PlayingNow";
import { Header } from "./Header";
import { Main } from "./Main";
import { PlaylistInfo } from "./PlaylistInfo";
export function Playlist() {
  return (
    <Grid
      gridTemplateAreas={`"top-bar top-bar" "nav-bar main-view" "now-playing-bar now-playing-bar"`}
      gridTemplateColumns="auto 1fr"
      gridTemplateRows="auto 1fr auto"
      height="100%"
      width="100%"
    >
      <NavBarLeft />
      <PlayingNow
        src={"/assets/playlist/albumImage.svg"}
        alt={"album 237"}
        name={"Cap Way"}
        artist={"Yunk Vino"}
        linkOfMusic={"/assets/playlist/musica001.mp3"}
      />
      <Box
        width="100%"
        height="100vh"
        overflowY="scroll"
        gridArea="main-view"
        paddingBottom="72px"
      >
        <Header />
        <PlaylistInfo />
        <Box backgroundColor="black" width="100%" padding="24px 32px">
          <Flex gap="16px" alignItems="center">
            <Button
              width="56px"
              height="56px"
              padding="0"
              borderRadius="50%"
              background="transparent"
              _hover={{}}
              _active={{}}
            >
              <Image
                src="/assets/icons/playIcon.svg"
                alt="Ícone de play"
                _hover={{ transform: "scale(1.04)" }}
              />
            </Button>
            <Button
              width="32px"
              height="32px"
              padding="0"
              background="transparent"
              _hover={{}}
              _active={{}}
            >
              <Image
                src="/assets/icons/likePlaylist.svg"
                alt="icone de like"
              ></Image>
            </Button>
            <Button
              width="32px"
              height="32px"
              padding="0"
              background="transparent"
              _hover={{}}
              _active={{}}
            >
              <Image
                src="/assets/icons/optionsICon.svg"
                alt="Ícone de opções"
              />
            </Button>
          </Flex>
        </Box>
        <Main />
      </Box>
    </Grid>
  );
}
