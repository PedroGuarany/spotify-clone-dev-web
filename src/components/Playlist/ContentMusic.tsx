import { Box, Grid, Text, Image, Flex, Link } from "@chakra-ui/react";

export interface DefaultMusicProps {
  number?: number;
  image: string;
  src: string;
  alt: string;
  name: string;
  artist: string;
  album: string;
  addIn: string;
  time: string;
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
    <Link href={src}>
      <Box padding="6px 0" _hover={{ backgroundColor: "hsla(0,0%,100%,.1)" }}>
        <Grid
          padding="0 16px"
          alignItems="center"
          gridTemplateColumns="[index] 4ch [first] 6fr [var1] 4fr [var2] 3fr [last]minmax(120px,1fr)"
          gap="16px"
        >
          <Flex justifyContent="center">
            <Text color="#b3b3b3" display="block" fontSize="16px" fontWeight="bold" width="4ch" cursor="default">
                {number}
            </Text>
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
                <Text fontSize="14px" color="#b3b3b3">
                  <Link href="/playlist">{artist}</Link>
                </Text>
              </Flex>
            </Box>
          </Box>
          <Text fontSize="14px" color="#b3b3b3">
            <Link href="/playlist">{album}</Link>
          </Text>
          <Text fontSize="14px" color="#b3b3b3">
            {addIn}
          </Text>
          <Text color="#b3b3b3" justifySelf="end">
            {time}
          </Text>
        </Grid>
      </Box>
    </Link>
  );
}
