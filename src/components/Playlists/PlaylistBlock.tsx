import { Box, Flex, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Music } from "react-feather";
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
                    position="relative" 
                    overflow="hidden"
                    minWidth="11.5rem"
                    minH="17rem"
                    padding="0.9rem"
                    _hover={{backgroundColor: "#282828"}}
                    transition="all 300ms">
                        {image ? <Image src={image} alt="alt" borderRadius="0.25rem"/> :
                        <Box backgroundColor="#282828" border="none" color="#b3b3b3" minWidth="155.2px" minHeight="155.2px" borderRadius="0.25rem">
                            <Flex align="center" justify="center" width="100%" height="100%" minH={["9.7rem", "9.7rem", "9.7rem", "12rem", "12rem"]}>
                                <Music width="100" height="100"/>
                            </Flex> 
                        </Box>}
                        <Text color="#fff" fontWeight="700" fontSize="1rem">{name}</Text>
                        <Text color="#6a6a6a" fontSize="0.875rem">{description}</Text>
                </Box>
            </NavigationOption>
        </LinkBox>
    );
}