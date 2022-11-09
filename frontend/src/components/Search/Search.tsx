import { TriangleDownIcon } from "@chakra-ui/icons";
import { Flex, Button, Box, Image, Text, Grid, GridItem, InputLeftElement, InputGroup, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Search } from "react-feather";
import api from "../../api";
import { LoggedHeader } from "../Common/LoggedHeader";
import { NavBarLeft } from "../Common/NavBarLeft";
import { PlaylistBlock } from "../Playlists/PlaylistBlock";


export function SearchComponent(){
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const handleSearch = event => {
    event.preventDefault();

    api.get(`/playlists?name_like=${search}`).then((response) => {
      setResults(response.data);
    });
  };

  return (
    <Box height="100%" width="100%" bgColor="#121212">
      <Grid
        templateAreas={`"top-bar top-bar" "nav-bar main-view" "now-playing-bar now-playing-bar"`}
        gridTemplateColumns={"auto 1fr"}
        gridTemplateRows={"auto 1fr auto"}
        height="100%"
        width="100%"
        minHeight="100vh">
          <GridItem area="nav-bar">
              <NavBarLeft/>   
          </GridItem>
          <GridItem area="main-view" h= "100%" w="100%">
          <LoggedHeader />
          <InputGroup as="form" width="20rem" backgroundColor="white" color="black" marginLeft="8rem" borderRadius="500px" marginTop="-3.3rem" onSubmit={handleSearch}>
            <InputLeftElement
              pointerEvents='none'
              children={<Search/>}
              />
            <Input placeholder='O que você quer ouvir?' borderRadius="500px" onChange={(event) => {setSearch(event.target.value)}}/>
            <Button type="submit" hidden></Button>
          </InputGroup>
          <Grid
            templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)", "repeat(4, 1fr)","repeat(5, 1fr)","repeat(6, 1fr)"]} 
            gap="1.5rem"
            margin="2.5rem"
          >
            {results.map(result => (<PlaylistBlock id={result.id} image={result.image} name={result.name} description={result.description}></PlaylistBlock>))}
          </Grid>

          </GridItem>
      </Grid>
    </Box>
  );
}