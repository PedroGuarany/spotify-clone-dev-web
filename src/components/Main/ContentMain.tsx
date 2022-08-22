import { Button, Flex, Text, Box } from "@chakra-ui/react";

export function ContentMain() {
  return (
    <Box
      backgroundColor="#2D46B9"
      backgroundImage="/assets/main/circles.svg"
      backgroundRepeat="no-repeat"
      backgroundPosition="right center"
      backgroundSize="auto 10 0%"
      textAlign="center"
      height="50vh"
    >
      <Flex
        direction="column"
        marginLeft="7rem"
        align="flex-start"
        width="35rem"
        justify="center"
        height="50vh"
        gap="2rem"
      >
        <Text color="greenX.100" fontWeight="600" fontSize="0.9rem">
          SPOTIFY FREE
        </Text>
        <Text color="greenX.100" fontSize="3rem" fontWeight="bold">
          Escutar muda tudo
        </Text>
        <Text color="greenX.100" fontSize="1.5rem" textAlign="start">
          Milhões de músicas e podcasts para explorar. E nem precisa de cartão
          de crédito.
        </Text>
        <Button
          bgColor="greenX.100"
          color="#2941ab"
          variant="solid"
          fontSize="0.875rem"
          fontWeight="bold"
          padding="0.875rem 2rem"
          marginTop="2rem"
          borderRadius="2rem"
        >
          BAIXE O SPOTIFY FREE
        </Button>
      </Flex>
    </Box>
  );
}
