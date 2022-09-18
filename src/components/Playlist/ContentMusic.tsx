import { Box, Grid, Text, Image, Flex, Link } from "@chakra-ui/react";

interface DefaultMusicProps {
    numb: string;
    music: string,
    artist: string,
    album: string,
    addIn: string,
    time: string
}

export function ContentMusic({numb, music, artist, album, addIn, time}: DefaultMusicProps) {
    return (
        <>
            <Grid padding="0 16px" alignItems="center" gridTemplateColumns= "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)" gap="16px">
                <Text color="#b3b3b3" display="block" fontSize="16px" fontWeight="bold">{numb}</Text>
                <Box>
                    <Text fontWeight="400" color="white">{music}</Text>
                    <Flex alignItems="center" flexDirection="row">
                        <Text fontSize="14px" color="#b3b3b3"><Link href="/playlist">{artist}</Link></Text>
                    </Flex>
                </Box>
                <Text fontSize="14px" color="#b3b3b3"><Link href="/playlist">{album}</Link></Text>
                <Text fontSize="14px" color="#b3b3b3">{addIn}</Text>
                <Text color="#b3b3b3" justifySelf="end">{time}</Text>
            </Grid>
        </>
    );
}