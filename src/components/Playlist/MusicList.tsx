import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ContentMusic, DefaultMusicProps } from "./ContentMusic";

export function MusicList(playlistMusics) {
  const [musics, setMusics] = useState([] as DefaultMusicProps[]);

  useEffect(() =>{
    setMusics(playlistMusics["musics"]);
  });

  return (
    <Box background="#121212" padding="32px 32px">
      <Grid
        gridTemplateColumns="[index] 4ch [first] 6fr [var1] 4fr [var2] 3fr [var2] 3fr [last] minmax(120px,1fr);"
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
      {musics && musics.length ? musics.map((music, i) => 
        (
        <ContentMusic
          key={i + 1}
          id={music.id}
          src={music.src}
          name={music.name}
          artist={music.artist}
          album={music.album}
          addIn={music.addIn}
          time={music.time}
          image={music.image}
          alt={music.alt}/>
      )): null}
    </Box>
  );
}
