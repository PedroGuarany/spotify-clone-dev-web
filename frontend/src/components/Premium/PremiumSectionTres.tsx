import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function PremiumSectionTres() {
  return (
    <>
      <Box width="100vw" backgroundColor="#efefef">
        <Box width="1170px" margin="0px auto" padding="75px 15px">
          <Flex flexDirection="column" textAlign="center">
            <Text
              fontSize="40px"
              fontWeight="900"
              letterSpacing="-0.5px"
              lineHeight="1"
            >
              Escolha seu plano Premium
            </Text>
            <Text fontSize="16px" margin="10px 0" lineHeight="1">
              Ouça sem limites no seu celular, alto-falante e em outros
              dispositivos.
            </Text>
            <Flex marginTop="16px" justifyContent="center">
              <Box width="29px" height="23px" paddingRight="7px">
                <Image
                  src="https://content-tooling.spotifycdn.com/images/52f004ea-a49a-420b-8dca-14f5304ff4bf_visa.svg"
                  alt="Logotipo da visa"
                />
              </Box>
              <Box width="29px" height="23px" paddingRight="7px">
                <Image
                  src="https://content-tooling.spotifycdn.com/images/3a865441-c6d4-4f92-a4be-6c96c0e96d1f_mastercard.svg"
                  alt="Logotipo da mastercard"
                />
              </Box>
              <Box width="29px" height="23px" paddingRight="7px">
                <Image
                  src="https://content-tooling.spotifycdn.com/images/d4dd3e5b-f7d9-4cd0-80f1-b65f19c5e55c_amex.svg"
                  alt="Logotipo da American Express"
                />
              </Box>
              <Box width="29px" height="23px" paddingRight="7px">
                <Image
                  src="https://content-tooling.spotifycdn.com/images/0a5cdc06-7024-4d04-999f-18e8b225b581_elo.svg"
                  alt="Logotipo da Elo"
                />
              </Box>
              <Box width="29px" height="23px" paddingRight="7px">
                <Image
                  src="https://content-tooling.spotifycdn.com/images/46c5bd7a-bdb3-43a8-916d-889887b02d80_hiper.svg"
                  alt="Logotipo da Hipercard"
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

interface BoxPlanProps {
    plano: string;
    descricao: string;
    contas: string;
}