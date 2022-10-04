import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";
import { ContentMusic, DefaultMusicProps } from "./ContentMusic";



const musics: DefaultMusicProps[] = [
  {
    onClick: null,
    name: "Cap Way",
    src: "/assets/playlist/musica001.mp3",
    artist: "Yunk Vino",
    album: "237",
    addIn: "13 de fev. de 2022",
    time: "2:56",
    image: "/assets/playlist/albumImage.svg",
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
        <ContentMusic
          key={i + 1}
          number={i + 1}
          src={music.src}
          name={music.name}
          artist={music.artist}
          album={music.album}
          addIn={music.addIn}
          time={music.time}
          image={music.image}
          alt={music.alt}/>
      ))}
    </Box>
  );
}
