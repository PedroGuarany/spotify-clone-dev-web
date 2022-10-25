import { Box, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { NavigationOption } from "../Common/NavigationOption";

interface PlaylistBlockProps {
    id: string;
    image: string;
    name: string;
    description: string;
}
export function PlaylistBlock({id, image, name, description} : PlaylistBlockProps){
    return (
        <LinkBox>
            <NavigationOption link={`/playlist/${id}`}>
                <Box
                    bgColor="#181818"
                    borderRadius="0.25rem" 
                    minWidth="11.5rem"
                    minH="17rem"
                    padding="0.9rem"
                    _hover={{backgroundColor: "#282828"}}
                    transition="all 300ms">
                        <Image src={image} alt="alt" borderRadius="0.25rem"/>
                        <Text color="#fff" fontWeight="700" fontSize="1rem">{name}</Text>
                        <Text color="#6a6a6a" fontSize="0.875rem">{description}</Text>
                </Box>
            </NavigationOption>
        </LinkBox>
    );
}