import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Button } from "../Common/DefaultButton"

export function PremiumSection() {
    return (
        <Box width="100vw" background="#1D75DE">
            <Flex width="1140px" margin="auto" flexDirection="column" paddingTop="72px" paddingBottom="40px">
                <Text fontSize="40px" fontWeight="900" color="white">Aproveite 1 mês grátis de Premium</Text>
                <Text fontSize="24px" margin="30px 0" color="white">Depois, pague somente R$ 19,90/mês. Cancele quando quiser.</Text>
                <Button width="183.67px" height="52px" margin="35px 0 0" text={"Comece agora"} color={"Black"} fontColor={"White"} textTransform="uppercase" fontWeight="900" />
                <Text fontSize="11px" marginTop="40px" fontWeight="bold" color="white"><Link textDecoration="underline" href="#">Sujeito a Termos e Condições. </Link>O mês grátis não está disponível para usuários que já experimentaram o Premium.</Text>
            </Flex>
        </Box>
    );
}