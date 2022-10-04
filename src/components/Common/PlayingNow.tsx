import { Box, Flex } from "@chakra-ui/react";

export function PlayingNow() {
    return (
        <>
            <Box width="100%" zIndex="4" gridArea="now-playing-bar" position="fixed" bottom="0">
                <Flex backgroundColor="#181818" borderTop="1px solid #282828">
                    <Box height="90px" padding="0 16px">

                    </Box>
                </Flex>
            </Box>
        </>
    );
}