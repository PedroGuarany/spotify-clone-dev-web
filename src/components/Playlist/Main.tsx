import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ContentMusic } from "./ContentMusic";
import { DefaultImage } from "./DefaultImage";

export function Main() {
    return (
        <>
            <Flex>
                <Box width="250px" height="100vh"></Box>
                <Box width="100%" maxHeight="500px" minHeight="340px">
                    <Box background="linear-gradient(transparent 0, rgba(0,0,0.5) 100%) #fff">
                        <Box padding="86px 32px 24px" max-width="100%" backgroundColor="rgb(32, 72, 48)">
                            <Flex>
                                <DefaultImage src={"/assets/playlist/playlistImage.svg"} alt={"Imagem da playlist: o drip"}></DefaultImage>
                                <Box color="white" width="auto" margin="24px 0 0 24px">
                                    <Text textTransform="uppercase" paddingTop="10px">playlist</Text>
                                    <Heading margin="8px 0 12px" fontSize="98px" fontWeight="900">O Drip</Heading>
                                    <Text>Chique e confortável como a realeza do Trap. Foto: Brandão85</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box padding="0 32px">
                        <Flex padding="0 16px" color="#b3b3b3" marginBottom="32px" gap="16px">
                            <Text>#</Text>
                            <Text textTransform="uppercase">Título</Text>
                        </Flex>
                            <ContentMusic numb="1" music={"Cap Way"} artist={"Yunk Vino"} album={"237"} time={"2:56"}></ContentMusic>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}