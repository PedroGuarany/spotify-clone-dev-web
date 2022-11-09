import { Flex, Text, Box, Image, Grid, GridItem, Link } from "@chakra-ui/react";

import { Button } from "../Common/DefaultButton";

export function ContentPink() {
  return (
    <Box backgroundColor="#993399">
      <Grid
        templateColumns={{
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        width="100vw"
        maxHeight={["70rem", "70rem", "80rem", "50rem", "45rem"]}
      >
        <Flex
          direction="column"
          padding={["2rem", "4rem", "7rem"]}
          align={["center", "center", "center", "flex-start"]}
          gap="1rem"
          maxWidth={["35rem", "50rem", "80rem", "50rem", "50rem"]}
        >
          <Text
            textStyle="defaultText"
            fontWeight="600"
            fontSize={["0.8rem", "0.9rem"]}
          >
            SPOTIFY PREMIUM
          </Text>
          <Text
            textStyle="defaultText"
            fontWeight="bold"
            fontSize={["1.5rem", "2.3rem", "3rem", "2rem", "3rem"]}
            textAlign={["center", "center", "center", "left"]}
          >
            Aproveite 3 meses de Premium por R$ 0,00
          </Text>
          <Text
            textStyle="defaultText"
            fontSize={["1rem", "1rem", "1rem", "1.5rem"]}
            textAlign={["center", "center", "center", "left"]}
          >
            Curta músicas sem anúncios, ouça no modo offline e muito mais.
            Cancele quando quiser.
          </Text>
          <GridItem>
            <Flex
              gap="3rem"
              direction="column"
              alignItems={["center", "center", "center", "start", "start"]}
            >
              <Button
                color="#000"
                text="APROVEITE 3 MESES GRÁTIS"
                fontColor="#fff"
              ></Button>
              <Text
                textStyle="defaultText"
                fontSize={["0.625rem", "0.75rem"]}
                fontWeight="bold"
              >
                Somente no plano Individual. Depois, é só R$ 19,90/mês.{" "}
                <Link textDecoration="underline">
                  Sujeito a Termos e Condições.
                </Link>{" "}
                Disponível apenas para quem nunca usou o Premium. Oferta válida
                até 11 de setembro de 2022.
              </Text>
            </Flex>
          </GridItem>
        </Flex>

        <GridItem>
          <Flex align="center" justify="center" height="full">
            <Image
              src="/assets/main/pinkDressedWoman.jpeg"
              alt=""
              width={["15rem", "25rem", "25rem", "25rem", "25rem"]}
              marginBottom={["2rem"]}
            />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
