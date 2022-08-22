import {
  Flex,
  Button,
  Text,
  Box,
  Image,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";

export function ContentPink() {
  return (
    <Box backgroundColor="#993399">
      <Grid
        templateColumns={{
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        width="100vw"
        height="50vh"
      >
        <Flex
          direction="column"
          marginLeft="7rem"
          align="flex-start"
          width="35rem"
          justify="center"
          gap="1rem"
        >
          <Text textStyle="defaultText" fontWeight="600" fontSize="0.9rem">
            SPOTIFY PREMIUM
          </Text>
          <Text textStyle="defaultText" fontSize="3rem" fontWeight="bold">
            Aproveite 3 meses de Premium por R$ 0,00
          </Text>
          <Text textStyle="defaultText" fontSize="1.5rem" textAlign="start">
            Curta músicas sem anúncios, ouça no modo offline e muito mais.
            Cancele quando quiser.
          </Text>
          <GridItem>
          <Button
            bgColor="#000"
            variant="solid"
            fontSize="0.875rem"
            fontWeight="bold"
            padding="0.875rem 2rem"
            marginTop="2rem"
            borderRadius="2rem"
            textStyle="defaultText"
            textTransform="uppercase"
            _hover={{ transform: "scale(1.04)" }}
          >
            Aproveite 3 meses grátis
          </Button>
          <Button
            variant="outline"
            fontSize="0.875rem"
            fontWeight="bold"
            padding="0.875rem 2rem"
            marginTop="2rem"
            marginLeft="1rem"
            borderRadius="2rem"
            color="white"
            textTransform="uppercase"
            _hover={{ transform: "scale(1.04)" }}
          >
            Ver Plano
          </Button>
          </GridItem>
          <Text textStyle="defaultText" fontSize="10px" fontWeight="bold">
            Somente no plano Individual. Depois, é só R$ 19,90/mês.{" "}
            <Link textDecoration="underline">
              Sujeito a Termos e Condições.
            </Link>{" "}
            Disponível apenas para quem nunca usou o Premium. Oferta válida até
            11 de setembro de 2022.
          </Text>
        </Flex>

        <GridItem>
          <Flex align="center" justify="center" height="50vh">
            <Image src="/assets/main/teste.jpeg" width="25rem" />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
