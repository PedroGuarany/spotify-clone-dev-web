import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  Link,
  Button,
  GridItem,
} from "@chakra-ui/react";
import { NavBarLeft } from "../Common/NavBarLeft";
import { PlayingNow } from "../Common/PlayingNow";
import { PointIcon } from "../Common/PointIcon";
import { ContentMusic, DefaultMusicProps } from "./ContentMusic";
import { DefaultImage } from "./DefaultImage";
import { LoggedHeader } from "../Common/LoggedHeader";

const musics: DefaultMusicProps[] = [
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
  {
    name: "Cap Way",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    src: "/assets/playlist/albumImage.svg",
    alt: "237 imagem",
  },
];

export function Main() {
  return (
    <Box background="#121212" padding="32px 32px">
      <Grid
        gridTemplateColumns="[index] 4ch [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr);"
        padding="0 16px"
        alignItems="center"
        color="#b3b3b3"
        marginBottom="32px"
        gap="16px"
        borderBottom="#fff"
      >
        <Flex justifyContent="center">
          <Text>#</Text>
        </Flex>
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

      {musics.map((music, i) => (
        // eslint-disable-next-line react/jsx-key
        <ContentMusic
          number={i + 1}
          name={music.name}
          artist={music.artist}
          album={music.album}
          addIn={music.addIn}
          time={music.time}
          src={music.src}
          alt={music.alt}
        />
      ))}
    </Box>
  );
}
