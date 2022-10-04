import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  Link,
  Button,
} from "@chakra-ui/react";
import { NavBarLeft } from "../Common/NavBarLeft";
import { PlayingNow } from "../Common/PlayingNow";
import { PointIcon } from "../Common/PointIcon";
import { ContentMusic } from "./ContentMusic";
import { DefaultImage } from "./DefaultImage";
import { Header } from "./Header";

export function Main() {
  return (
    <Grid
      gridTemplateAreas={`"top-bar top-bar" "nav-bar main-view" "now-playing-bar now-playing-bar"`}
      gridTemplateColumns="auto 1fr"
      gridTemplateRows="auto 1fr auto"
      height="100%"
      width="100%"
    >
      <NavBarLeft />
      <Box width="100%" height="100vh" overflowY="scroll" gridArea="main-view">
      <Header />
        <Box background="linear-gradient(transparent 0, rgba(0,0,0.5) 100%) #fff">
          
          <Box
            padding="86px 32px 24px"
            max-width="100%"
            backgroundColor="rgb(32, 72, 48)"
            marginTop="-64px"
          >
            <Flex>
              <DefaultImage
                src={"/assets/playlist/playlistImage.svg"}
                alt={"Imagem da playlist: o drip"}
              />
              <Box color="white" width="auto" margin="18px 0 0 24px">
                <Text textTransform="uppercase" paddingTop="10px">
                  playlist
                </Text>
                <Heading margin="8px 0 12px" fontSize="98px" fontWeight="900">
                  O Drip
                </Heading>
                <Text color="#b3b3b3">
                  Chique e confortável como a realeza do Trap. Foto: Brandão85
                </Text>

                <Text
                  paddingTop="8px"
                  fontSize="14px"
                  display="flex"
                  gap="4px"
                  alignItems="center"
                >
                  <Link fontWeight="bold" href="/user/spotify">
                    Spotify
                  </Link>{" "}
                  <PointIcon /> {"57.658"} curtidas <PointIcon /> {"50"}{" "}
                  músicas, {"2h 33min"}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
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
        <Box background="#121212" padding="32px 32px">
          <Grid
            gridTemplateColumns="[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr);"
            padding="0 16px"
            alignItems="center"
            color="#b3b3b3"
            marginBottom="32px"
            gap="16px"
            borderBottom="#fff"
          >
            <Text>#</Text>
            <Text fontSize="12px" textTransform="uppercase">
              Título
            </Text>
            <Text fontSize="12px" textTransform="uppercase">
              Álbum
            </Text>
            <Text fontSize="12px" textTransform="uppercase">
              Adicionado em
            </Text>
            <Image
              justifySelf="end"
              width="21px"
              src="/assets/icons/timeIcon.svg"
              alt="Ícone de um relogio"
            />
          </Grid>

          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
          <ContentMusic
            number="1"
            name={"Cap Way"}
            artist={"Yunk Vino"}
            album={"237"}
            addIn={"13 de fev. de 2022"}
            time={"2:56"}
            src={"/assets/playlist/albumImage.svg"}
            alt={"237 imagem"}
          ></ContentMusic>
        </Box>
      </Box>
      <PlayingNow src={"/assets/playlist/albumImage.svg"} alt={"album 237"} name={"Cap Way"} artist={"Yunk Vino"} album={""} addIn={""} time={""} number={""} />
    </Grid>
  );
}
