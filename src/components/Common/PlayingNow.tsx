import { Box, Flex, Text, Image, Link, Button } from "@chakra-ui/react";
import DefaultMusicProps from "../Playlist/ContentMusic";

export function PlayingNow({
    src,
    alt,
    name,
    artist,
  }: DefaultMusicProps) {
    return (
        <>
            <Box width="100%" zIndex="4" gridArea="now-playing-bar" position="fixed" bottom="0">
                <Flex height="90px" backgroundColor="#181818" borderTop="1px solid #282828" alignItems="center">
                    <Box padding="0 16px">
                        <Flex alignItems="center">
                            <Image src={src} alt={alt} width="56px" height="56px"></Image>
                          
                            <Flex flexDirection="column" margin="0 14px" justifyContent="center">
                                <Text color="#fff" fontSize="14px"><Link href="/">{name}</Link></Text>
                                <Text color="#a7a7a7" fontSize="11px"><Link href="/">{artist}</Link></Text>
                            </Flex>
                            <Button padding="0" width="16px" height="16px" background="none" _hover={{}} _active={{}}>
                                <Image src="/assets/icons/likePlaylist.svg" alt="icone de curtir a música" width="100%" height="100%"></Image>
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}