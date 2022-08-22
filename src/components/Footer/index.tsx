import { EmailIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, UnorderedList, ListItem, Link, Button, IconButton, Flex } from "@chakra-ui/react";
import { Logo } from "../Common/Logo"
import { FooterList } from "./FooterList";
import { FooterListOption } from "./FooterListOption";
import { Facebook, Twitter, Instagram } from "react-feather"
import { Text } from "../Common/DefaultText";
import { NavigationOption } from "../Common/NavigationOption";
import {Globe} from "react-feather"

export function Footer() {
  return (
    <Box
      bgColor="black">
      <Grid
        templateColumns={{
          md: "repeat(1, 1fr)",
          lg: "repeat(7, 1fr)",
        }}
        width="100vw"
        height="40vh"
        padding="5rem 2rem"
      >
        <GridItem></GridItem>
        <GridItem>
          <Logo width={["100%", "100%"]} />
        </GridItem>
        <GridItem>
          <FooterList topic="Empresa">
            <FooterListOption link="" text="Sobre" />
            <FooterListOption link="" text="Empregos" />
            <FooterListOption link="" text="For the record" />
          </FooterList>
        </GridItem>
        <GridItem>
          <FooterList topic="Comunidades">
            <FooterListOption link="" text="Para Artistas" />
            <FooterListOption link="" text="Desenvolvedores" />
            <FooterListOption link="" text="Publicidade" />
            <FooterListOption link="" text="Investidores" />
            <FooterListOption link="" text="Fornecedores" />
          </FooterList>
        </GridItem>
        <GridItem>
          <FooterList topic="Links úteis">
            <FooterListOption link="" text="Suporte" />
            <FooterListOption link="" text="Player da Web" />
            <FooterListOption link="" text="Aplicativo móvel grátis" />
          </FooterList>
        </GridItem>
        <GridItem>
          <Flex gap="1rem">
            <IconButton aria-label="InstagramIcon" icon={<Instagram size="18"/>} colorScheme="white" bgColor="#222326" borderRadius="50%" _hover={{color: "#1ED760"}}></IconButton>
            <IconButton aria-label="TwitterIcon" icon={<Twitter size="18" fill="white"/>} colorScheme="white" bgColor="#222326" borderRadius="50%" _hover={{color: "#1ED760"}}></IconButton>
            <IconButton aria-label="FacebookIcon" icon={<Facebook size="18" fill="white"/>} colorScheme="white" bgColor="#222326" borderRadius="50%" _hover={{color: "#1ED760"}}></IconButton>
          </Flex>
        </GridItem>
        <GridItem></GridItem>
      </Grid>

      <Flex marginLeft="20%" width="60%" paddingBottom="1rem" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
        <Flex gap="1rem" >
          <NavigationOption link="">
            <Text text="Legal" color="#919496"></Text>
          </NavigationOption>
          <NavigationOption link="">
            <Text text="Centro de Privacidade" color="#919496"></Text>
          </NavigationOption>
          <NavigationOption link="">
            <Text text="Política de privacidade" color="#919496"></Text>
          </NavigationOption>
          <NavigationOption link="">
            <Text text="Cookies" color="#919496"></Text>
          </NavigationOption>
          <NavigationOption link="">
            <Text text="Sobre anúncios" color="#919496"></Text>
          </NavigationOption>
        </Flex>

        <Flex alignItems="flex-end" direction="column">
          <Flex gap="0.2rem" align="center">
            <Globe size="15" color="#919496"/>
            <NavigationOption link="">
              <Text text="Brazil" color="#919496"></Text>
            </NavigationOption>
          </Flex>
          <Text text="©2022 Spotify AB" color="#919496"></Text>
        </Flex>
      </Flex>
    </Box>
  );
}
