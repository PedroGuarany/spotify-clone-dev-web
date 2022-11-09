import { Box, Flex, Image } from "@chakra-ui/react";
import { Music } from "react-feather";

interface DefaultImageProps {
    src: string;
    alt: string;

} 

export function DefaultImage({
    src,
    alt,

}: DefaultImageProps) {
    if(src)
        return <Image src={src} alt={alt} minWidth="14.5rem" minHeight="14.5rem"/>
    
    return (
    <Box backgroundColor="#282828" border="none" color="#b3b3b3" minWidth="14.5rem" minHeight="14.5rem">
        <Flex align="center" justify="center" width="14.5rem" height="14.5rem">
            <Music width="100" height="100"/>
        </Flex> 
    </Box>
    );
}