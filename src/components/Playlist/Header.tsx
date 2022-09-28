import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";


export function Header() {
    return (
        <>
            <Box padding="16px 32px" maxWidth="100%" background="rgba(255, 255, 255, 0)"  position="fixed">
                <Flex width="100%" alignItems="center" justifyContent="space-between">
                    <Box display="flex" justifyContent="space-between" width="80px">
                        <Button display="flex" alignItems="center" justifyContent="center" backgroundColor="rgba(0,0,0,.7)" padding="0" minWidth="32px" height="32px" borderRadius="50%" opacity=".6"_hover={{  }}>
                            <Image src="/assets/icons/arrowIcon.svg" alt="Seta"></Image>
                        </Button>
                        <Button display="flex" alignItems="center" justifyContent="center" backgroundColor="rgba(0,0,0,.7)" padding="0" minWidth="32px" height="32px" borderRadius="50%" opacity=".6" transform={"rotate(180deg)"} _hover={{  }}>
                            <Image src="/assets/icons/arrowIcon.svg" alt="Seta"></Image>
                        </Button>
                    </Box>
                    <Button width="115.47px" height="32px" backgroundColor="rgba(0,0,0,.7)" borderRadius="23px" _hover={{ backgroundColor:'#282828' }}>
                        <Image src="" alt="" borderRadius="50%"></Image>
                        <Text fontSize="14px" fontWeight="700" color="#fff">moises</Text>
                    </Button>
                </Flex>
            </Box>
        </>
    );
}