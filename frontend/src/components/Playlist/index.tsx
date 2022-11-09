import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { NavBarLeft } from "../Common/NavBarLeft";
import { LoggedHeader } from "../Common/LoggedHeader";
import { MusicList } from "./MusicList";
import { PlaylistInfo } from "./PlaylistInfo";
import { DefaultMusicProps } from "./ContentMusic";
import api from "../../api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Playlist{
    id: string;
    name: string;
    description: string;
    image: string;
    alt: string;
    musics: DefaultMusicProps[];
}

export function PlaylistComponent() {
  const router = useRouter();

  const [playlist, setPlaylist] =  useState({} as Playlist);
  
  useEffect(() =>{
    if(router.query.id){
      api.get(`/playlists/${router.query.id}`).then((response) => {
        setPlaylist(response.data);
      }).catch(e => console.log(e));
    }
  }, [router.query.id]);

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
                src="/assets/icons/optionsIcon.svg"
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
