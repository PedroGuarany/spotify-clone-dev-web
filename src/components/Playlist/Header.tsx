import { Box, Button, Flex } from "@chakra-ui/react";


export function Header() {
    return (
        <>
            <Box margin="24px 32px" width="1622px" background="rgba(255, 255, 255, 0)"  position="fixed">
                <Flex width="100%" alignItems="center" justifyContent="space-between">
                    <Box>
                        <Button></Button>
                    </Box>
                    <Button width="115.47px" height="32px" backgroundColor="rgba(0,0,0,.7)" borderRadius="23px" _hover={{ backgroundColor:'#282828' }}>

                    </Button>
                </Flex>
            </Box>
        </>
    );
}