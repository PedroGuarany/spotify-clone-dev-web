import { Flex, Text, Box } from "@chakra-ui/react";
import { Button } from "../Common/DefaultButton";

export function ContentMain() {
  return (
    <Box
      backgroundColor="#2D46B9"
      backgroundImage={[
        "none",
        "none",
        "none",
        "none",
        "/assets/main/circles.svg",
      ]}
      backgroundRepeat="no-repeat"
      backgroundPosition={["center center", "right center"]}
      backgroundSize={["auto 10 0%"]}
      textAlign="center"
    >
      <Flex
        direction="column"
        padding={["2rem", "4rem", "4rem", "7rem", "7rem"]}
        alignItems={["center", "center", "center", "start", "start"]}
        align="flex-start"
        maxWidth={["50rem", "50rem", "80rem", "50rem", "50rem"]}
        justify="center"
        // height={["50rem"]}
        gap="2rem"
      >
        <Text
          textStyle="defaultText"
          color="greenX.100"
          fontWeight="600"
          fontSize={["0.8rem", "0.9rem"]}
        >
          SPOTIFY FREE
        </Text>
        <Text
          textStyle="defaultText"
          textAlign={["center", "center", "center", "left"]}
          fontWeight="bold"
          fontSize={["2rem", "2.3rem", "3rem", "2rem", "3rem"]}
        >
          Escutar muda tudo
        </Text>
        <Text
          color="greenX.100"
          fontSize={["1rem", "1rem", "1rem", "1.5rem"]}
          textAlign={["center", "center", "center", "left"]}
        >
          Milhões de músicas e podcasts para explorar. E nem precisa de cartão
          de crédito.
        </Text>
        <Button
          color="greenX.100"
          fontColor="#2941ab"
          text="BAIXE O SPOTIFY FREE"
        ></Button>
      </Flex>
    </Box>
  );
}
