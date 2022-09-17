import { Box, Grid, Text } from "@chakra-ui/react";

interface DefaultMusicProps {
    numb: string;
    music: string,
    artist: string,
    album: string,
    time: string
}

export function ContentMusic({numb, music, artist, album, time}: DefaultMusicProps) {
    return (
        <>
            <Grid padding="0 16px" alignItems="center" gridTemplateColumns="[index] 16px [first] 4fr [last]minmax(120px,1fr)" gap="16px">
                <Text color="#b3b3b3" display="block" fontSize="16px" fontWeight="bold">{numb}</Text>
                <Box>
                    <Text fontWeight="400" color="white">{music}</Text>
                    <Text color="#b3b3b3">{artist} | {album}</Text>
                </Box>
                <Text color="#b3b3b3" justifySelf="end">{time}</Text>
            </Grid>
        </>
    );
}