import { Box, Flex, Text } from "@chakra-ui/react";
import { Menu } from "../Header/Menu";


export function SupportComponent(){
    return (
        <Box
            h="100vh"
            bgGradient="linear(176deg, darkGreen 0%, black 25%)"
            textAlign="center"
            >
            <Menu bg="transparent">
            </Menu>

            <Flex 
                direction="column"
                justify="flex-start"
                marginLeft="7rem"
                gap="2rem"
                >
                <Text>
                    Atendimento do Spotify
                </Text>
            </Flex>
        </Box>
    );
}