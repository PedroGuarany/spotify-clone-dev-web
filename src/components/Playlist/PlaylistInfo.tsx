import { Flex, Heading, Box, Text, Link } from "@chakra-ui/react";
import { PointIcon } from "../Common/PointIcon";
import { DefaultImage } from "./DefaultImage";

export function PlaylistInfo() {
    return (
        <Box backgroundColor="linear-gradient(transparent 0, rgba(0,0,0.5) 100%) #fff">
          <Box
            padding="86px 32px 24px"
            maxWidth="100%"
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
                  </Link>
                  <PointIcon /> {"57.658"} curtidas <PointIcon /> {"50"}{" "}
                  músicas, {"2h 33min"}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
    );
}