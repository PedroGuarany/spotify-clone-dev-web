import { Flex, Heading } from '@chakra-ui/react'
import { LogoBlack } from '../Common/Logo';

export function HeaderRegister() {
    return (
        <>
        <Flex
        align="center"
        flexDirection="column"
        padding="40px 0 32px">

            <LogoBlack/>
            <Flex
            justifyContent="center" 
            marginTop="2.5rem">
                <Heading textAlign="center" as='h1' size='lg' fontSize="2rem" fontWeight="800">
                    Inscreva-se grátis e comece a curtir.
                </Heading>
            </Flex>
        </Flex>
        </>
        
    );
}