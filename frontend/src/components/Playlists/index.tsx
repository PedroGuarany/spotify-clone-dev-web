import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import api from '../../api';
import { LoggedHeader } from '../Common/LoggedHeader';
import { NavBarLeft } from '../Common/NavBarLeft';
import { PlaylistBlock } from './PlaylistBlock';

export function PlaylistsComponent() {
  const [playlistsData, setPlaylists] =  useState([]);
    useEffect(() =>{
        api.get("/playlists").then(response => {
            setPlaylists(response.data);
        })
    }, [])
  return (
    <Grid
      templateAreas={`"top-bar top-bar" "nav-bar main-view" "now-playing-bar now-playing-bar"`}
      gridTemplateColumns={"auto 1fr"}
      gridTemplateRows={"auto 1fr auto"}
      height="100%"
      width="100%"
      minHeight="100vh"
      bg="#000"
    >
      <GridItem area="nav-bar">
        <NavBarLeft />
      </GridItem>
      <Box width="100%" height="100vh" overflowY="scroll" gridArea="main-view">
            <LoggedHeader />
        <Box w="100%" padding="86px 32px 24px" marginTop="-63px" >
                <Text
                    color="#fff"
                    fontSize="1.5rem"
                    fontWeight="700"
                    marginLeft="2.5rem"
                >
                    Spotify Playlists
                </Text>
            </Box>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(5, 1fr)",
            "repeat(6, 1fr)",
          ]}
          gap="1.5rem"
          margin="2.5rem"
        >
            {playlistsData.map(playlist => 
                ( <PlaylistBlock key={playlist.id} id={playlist.id} image={playlist.image} name={playlist.name} description={playlist.description}></PlaylistBlock> )
            )}
        </Grid>
       </Box> 
    </Grid>
  );
}
