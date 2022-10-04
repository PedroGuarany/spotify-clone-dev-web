import {
  Flex,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { PointIcon } from "../Common/PointIcon";
import { DefaultMusicProps } from "./ContentMusic";
import { DefaultImage } from "./DefaultImage";
interface PlaylistProps {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
}

export function PlaylistInfo({
  id,
  name,
  image,
  alt,
  description
}: PlaylistProps) {
  return (
        <Box backgroundColor="linear-gradient(transparent 0, rgba(0,0,0.5) 100%) #fff">
          <Box
            padding="86px 32px 24px"
            maxWidth="100%"
            backgroundColor="rgb(32, 72, 48)"
            marginTop="-64px"
          >
            <Flex>
              <DefaultImage src={image} alt={alt} />
              <Box color="white" width="auto" margin="18px 0 0 24px">
                <Text textTransform="uppercase" paddingTop="10px">
                  playlist
                </Text>
                <Heading margin="8px 0 12px" fontSize="98px" fontWeight="900">
                  {name}
                </Heading>
                <Text color="#b3b3b3">{description}</Text>

                <Text
                  paddingTop="8px"
                  fontSize="14px"
                  display="flex"
                  gap="4px"
                  alignItems="center"
                >
                  Spotify
                  <PointIcon /> {"N"} curtidas <PointIcon /> {"N"} músicas,{"Nh Nmin"}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
  );
}
