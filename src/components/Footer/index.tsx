import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
  Link,
  Button,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { Logo } from "../Common/Logo";
import { FooterList } from "./FooterList";
import { FooterListOption } from "./FooterListOption";
import { Facebook, Twitter, Instagram } from "react-feather";
import { Text } from "../Common/DefaultText";
import { NavigationOption } from "../Common/NavigationOption";
import { Globe } from "react-feather";

export function Footer() {
  return (
    <Box bgColor="black">
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(7, 1fr)",
        }}
        width="100vw"
        padding={["2rem", "3rem 2rem"]}
        gap="2rem"
      >
        <GridItem></GridItem>
        <GridItem>
          <Logo width={["80%", "60%", "50%", "100%"]} />
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
          <Flex gap="1rem" align="center" justify="center">
            <IconButton
              aria-label="InstagramIcon"
              icon={<Instagram size="18" />}
              colorScheme="white"
              bgColor="#222326"
              borderRadius="50%"
              _hover={{ color: "#1ED760" }}
            ></IconButton>
            <IconButton
              aria-label="TwitterIcon"
              icon={<Twitter size="18" fill="white" />}
              colorScheme="white"
              bgColor="#222326"
              borderRadius="50%"
              _hover={{ color: "#1ED760" }}
            ></IconButton>
            <IconButton
              aria-label="FacebookIcon"
              icon={<Facebook size="18" fill="white" />}
              colorScheme="white"
              bgColor="#222326"
              borderRadius="50%"
              _hover={{ color: "#1ED760" }}
            ></IconButton>
          </Flex>
        </GridItem>
      </Grid>
        
      <Flex
        marginLeft={["10%", "10%", "20%"]}
        marginRight={["10%", "10%", "15%"]}
        paddingBottom="1rem"
        justifyContent={["start", "start", "space-between"]}
        alignItems={["center", "center", "flex-end"]}
        flexWrap="wrap"
        gap="1rem"
      >
        <Flex gap="1rem"
         direction={["column", "row", "row"]}
         align="start">
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

        <Flex
          direction={["column", "row", "row", "row", "column"]}
          align={["start","flex-end"]}
          justify={["start", "center", "center","center", "flex-end"]}
          marginRight="2rem"
          gap="1rem"
          w={["full", "full", "full", "full", "fit-content"]}
        >
          <Flex gap="0.2rem" align="center">
            <Globe size="15" color="#919496" />
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
