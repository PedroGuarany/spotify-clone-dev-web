import { Flex, Heading } from '@chakra-ui/react'
import { LogoBlack } from './LogoBlack';

export function HeaderRegister() {
    return (
        <>
        <Flex
        align="center"
        flexDirection="column"
        padding="40px 0 32px">

            <LogoBlack/>
            <Flex 
            marginTop="40px"
            width="450px">
                <Heading textAlign="center" as='h1' size='lg' fontSize="30px" fontWeight="800">
                    Inscreva-se grátis e comece a curtir.
                </Heading>
            </Flex>
        </Flex>
        </>
        
    );
}