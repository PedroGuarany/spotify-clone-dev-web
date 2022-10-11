import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { LoggedHeader } from '../Common/LoggedHeader';
import { NavBarLeft } from '../Common/NavBarLeft';
import { PlaylistBlock } from './PlaylistBlock';
import PlaylistsData from './playlistsThumbs.json';
export function PlaylistsComponent() {
    return (
        <Box h="100vh" w="100%" bgColor="#121212">
            <Grid
                templateAreas={`"top-bar top-bar" "nav-bar main-view" "now-playing-bar now-playing-bar"`}
                gridTemplateColumns={"auto 1fr"}
                gridTemplateRows={"auto 1fr auto"}
                height="100%"
                width="100%"
                >

                <GridItem area="nav-bar">
                    <NavBarLeft/>   
                </GridItem>
                <GridItem area="main-view" h= "100%" w="100%">
                <LoggedHeader />
                    <Box  w="100%" padding="86px 32px 24px" marginTop={"-63"}>
                    <Text color="#fff" fontSize="1.5rem" fontWeight="700" marginLeft="2.5rem">Spotify Playlists</Text>
                    </Box>
                    <Grid
                        templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)", "repeat(4, 1fr)","repeat(5, 1fr)","repeat(6, 1fr)"]} 
                        gap="1.5rem"
                        margin="2.5rem"
                    >
                        {PlaylistsData.map(playlist => 
                        ( <PlaylistBlock key={playlist.id} id={playlist.id} image={playlist.image} name={playlist.name} description={playlist.description}></PlaylistBlock> )
                        )}
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
}