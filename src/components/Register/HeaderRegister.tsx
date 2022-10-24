import { Flex, Heading } from '@chakra-ui/react'
import { LogoBlack } from '../Common/Logo';

export interface TextHeaderProps {
    text: string;
}

export function HeaderRegister({ text }: TextHeaderProps) {
    return (
        <>
        <Flex
        align="center"
        flexDirection="column"
        padding="2.5rem 0 0">

            <LogoBlack/>
            <Flex
            justifyContent="center" 
            marginTop="2.5rem">
                <Heading textAlign="center" as='h1' size='lg' fontSize="2rem" fontWeight="800">
                    {text}
                </Heading>
            </Flex>
        </Flex>
        </>
        
    );
}