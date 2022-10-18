import { TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Grid, Text, Image, Flex } from "@chakra-ui/react";
import { Audio } from "../Common/Audio";
import { NavigationOption } from "../Common/NavigationOption";

export interface DefaultMusicProps {
  number?: number;
  name: string;
  artist: string;
  album: string;
  addIn: string;
  time: string;
  src: string;
  alt: string;
  image: string;
}

export function ContentMusic({
  number,
  image,
  src,
  alt,
  name,
  artist,
  album,
  addIn,
  time,
}: DefaultMusicProps) {
  return (
    <Box padding="6px 0" _hover={{ backgroundColor: "hsla(0,0%,100%,.1)" }}>
      <Grid
        padding="0 16px"
        alignItems="center"
        gridTemplateColumns="[index] 4ch [first] 6fr [var1] 4fr [var2] 3fr [last]minmax(120px,1fr)"
        gap="16px"
      >
        <Flex justifyContent="center" alignItems="center">
          <Text
            color="#b3b3b3"
            display="block"
            fontSize="16px"
            fontWeight="bold"
            cursor="default"
          >
            
          <Audio src={src} />
          </Text>
          <TriangleUpIcon
            id="play"
            transform="rotate(90deg)"
            display="none"
            color="white"
          />
        </Flex>
        <Box display="flex" alignItems="center">
          <Image
            src={image}
            alt={alt}
            width="40px"
            height="40px"
            marginRight="16px"
          ></Image>
          <Box>
            <Text fontWeight="400" color="white" cursor="default">
              {name}
            </Text>
            <Flex alignItems="center" flexDirection="row">
              <NavigationOption link={"/playlist"}>
                <Text fontSize="14px" color="#b3b3b3">
                  {artist}
                </Text>
              </NavigationOption>
            </Flex>
          </Box>
        </Box>
        <NavigationOption link={"/playlist"}>
          <Text fontSize="14px" color="#b3b3b3">
            {album}
          </Text>
        </NavigationOption>
        <Text fontSize="14px" color="#b3b3b3">
          {addIn}
        </Text>
        <Text color="#b3b3b3" justifySelf="end">
          {time}
        </Text>
      </Grid>
    </Box>
  );
}
