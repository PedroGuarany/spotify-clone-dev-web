import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { LoggedHeader } from '../Common/LoggedHeader';
import { NavBarLeft } from '../Common/NavBarLeft';
import { PlaylistBlock } from './PlaylistBlock';
import PlaylistsData from './playlistsThumbs.json';
export function PlaylistsComponent() {
    return (
        <Box h="100vh">
            <Grid
                templateAreas={`"top-bar top-bar" "nav-bar main-view" "now-playing-bar now-playing-bar"`}
                gridTemplateColumns={"auto 1fr"}
                gridTemplateRows={"auto 1fr auto"}
                height="100%"
                width="100%"
                bgColor="#121212"
                >

                <GridItem area="nav-bar">
                    <NavBarLeft/>   
                </GridItem>
                <GridItem area="main-view">
                    <LoggedHeader />
                    <Text color="#fff" fontSize="1.5rem" fontWeight="700" marginLeft="2.5rem">Spotify Playlists</Text>
                    <Grid
                        templateColumns={"repeat(7, 0.5fr)"}
                        gap="1.5rem"
                        margin="2.5rem"
                    >
                        {PlaylistsData.map(playlist => 
                        ( <PlaylistBlock id={playlist.id} image={playlist.image} name={playlist.name} description={playlist.description}></PlaylistBlock> )
                        )}
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
}