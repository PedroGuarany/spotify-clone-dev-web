import { Box, Grid, Text, Image, Flex, Link } from "@chakra-ui/react";

interface DefaultMusicProps {
  number: string;
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
        gridTemplateColumns="[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last]minmax(120px,1fr)"
        gap="16px"
      >
        <Text color="#b3b3b3" display="block" fontSize="16px" fontWeight="bold" cursor="default">
          {number}
        </Text>

        <Box display="flex" alignItems="center">
          <Image
            src={src}
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
  );
}
