import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { NavBarLeft } from "../Common/NavBarLeft";
import { PlayingNow } from "../Common/PlayingNow";
import { LoggedHeader } from "../Common/LoggedHeader";
import { MusicList } from "./MusicList";
import { PlaylistInfo } from "./PlaylistInfo";
import playlistsData from "./playlists.json";
import { DefaultMusicProps } from "./ContentMusic";
import { createRef } from "react";

let player;
export function Playlist(query) {
  const playlist = playlistsData.find(playlist => playlist.id === query.id);
  player = createRef();
  
  if(!playlist) return;

  const onClickCallback = (music: DefaultMusicProps) => { console.log(player)}
  return (
    <Grid
      gridTemplateAreas={`"top-bar top-bar" "nav-bar main-view" "now-playing-bar now-playing-bar"`}
      gridTemplateColumns="auto 1fr"
      gridTemplateRows="auto 1fr auto"
      height="100%"
      width="100%"
    >
      <GridItem area="nav-bar">
        <NavBarLeft />
      </GridItem>
      <PlayingNow
        src={""}
        alt={""}
        name={""}
        artist={""}
        linkOfMusic={""}
      />
      <Box
        width="100%"
        height="100vh"
        overflowY="scroll"
        gridArea="main-view"
        paddingBottom="72px"
        backgroundColor="#121212"
      >
        <LoggedHeader />
        <PlaylistInfo id={playlist.id} name={playlist.name} image={playlist.image} description={playlist.description} alt={playlist.alt} />
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
        <MusicList musics={playlist.musics}/>
      </Box>
    </Grid>
  );
}
