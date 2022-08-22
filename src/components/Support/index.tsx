import { ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Grid, GridItem, Input, InputGroup, InputLeftElement, Text as ChakraText } from "@chakra-ui/react";
import { NavigationOption } from "../Common/NavigationOption";
import { Menu } from "../Header/Menu";
import { SupportCard } from "./SupportCard";
import { Text } from "../Common/DefaultText";
import { FaqOption } from "./FaqOption";
import { Footer } from "../Footer";
import { Button } from "../Common/DefaultButton";


export function SupportComponent(){
    return (
        <Box
            h="100vh"
            bgGradient="linear(176deg, darkGreen 0%, black 25%)"
            alignContent="center"
            >
            <Menu bg="transparent">
            </Menu>

            <Center marginTop="2.5rem">
                <Flex 
                    direction="column"
                    gap="2rem"
                    width="35%">
                    <ChakraText 
                    textTransform="uppercase"
                    fontSize="1.2rem;"
                    fontWeight="bold"
                    color="#a7a7a7">
                        Atendimento do Spotify
                    </ChakraText>
                    <ChakraText
                     fontSize="4rem;"
                     fontWeight="900"
                     color="#fff"
                    >
                    Como podemos ajudar?
                    </ChakraText>
                    <ChakraText 
                        fontSize="1.5rem"
                        fontWeight="bold"
                        color="#a7a7a7"
                    >
                        <NavigationOption link="" style={{textDecoration: "underline"}} color="#fff">Faça log in</NavigationOption> para ter ajuda mais rápido    
                    </ChakraText>

                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300'
                        marginTop="0.6rem"/>}
                        />
                        <Input type='text' placeholder='Buscar'
                        bg="white"
                        size="lg"/>
                    </InputGroup>

                    <Grid
                    templateColumns={{
                        md: "repeat(1, 1fr)",
                        lg: "repeat(3, 1fr)",
                      }}
                      gap="2rem"
                    >
                        <GridItem><SupportCard text="Ajuda com pagamentos" image={"/assets/main/card.webp"} link="" bgColor="rgb(175, 40, 150)"></SupportCard></GridItem>
                        <GridItem><SupportCard text="Ajuda com o plano" image={"/assets/main/writing.webp"} link="" bgColor="rgb(140, 25, 50)"></SupportCard></GridItem>
                        <GridItem><SupportCard text="Ajuda com o app" image={"/assets/main/phone.webp"} link="" bgColor="rgb(176, 98, 57)"></SupportCard></GridItem>                        
                    
                        <GridItem><SupportCard text="Ajuda com dispositivos" image={"/assets/main/devices.webp"} link="" bgColor="rgb(0, 100, 80)"></SupportCard></GridItem>
                        <GridItem><SupportCard text="Privacidade e segurança" image={"/assets/main/keySecurity.webp"} link="" bgColor="rgb(117, 117, 117)"></SupportCard></GridItem>
                        <GridItem><SupportCard text="Ajuda com a conta" image={"/assets/main/usingCellphone.webp"} link="" bgColor="rgb(83, 122, 161)"></SupportCard></GridItem>
                    </Grid>
                </Flex>
            </Center>

            <Box 
                width="100%"
                h="50vh"
                bg="#232323"
                marginTop="5rem">
                <Center>
                    <Flex width="35%" align="flex-start" marginTop="2rem" gap="2rem" direction="column">
                        <ChakraText fontSize="1.5rem" fontWeight="700" color="#fff">Ajuda rápida</ChakraText>
                        <FaqOption link="" text="Não consigo redefinir a senha"></FaqOption>
                        <FaqOption link="" text="Tem algo errado com a minha conta"></FaqOption>
                        <FaqOption link="" text="Não lembro minhas informações de login"></FaqOption>
                        <FaqOption link="" text="Ajuda para entrar com o Facebook"></FaqOption>
                        <FaqOption link="" text="Formas de pagamento"></FaqOption>
                        <FaqOption link="" text="Criar ou entrar em um plano Família"></FaqOption>
                    </Flex>
                </Center>
            </Box>

            <Box
                width="100%"
                h="30vh"
                bg="#121212">
                <Center>
                    <Flex
                    marginTop="4rem"
                    gap="0.5rem"
                    direction="column"
                    align="center">
                        <ChakraText color="#fff" fontSize="3rem" fontWeight="900">Visite nossa Comunidade</ChakraText>
                        <ChakraText color="#fff" fontSize="1rem" maxWidth="85%" textAlign="center">Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs especialistas do mundo todo!</ChakraText>
                        <Button color="greenX.100" text="Acesse a Comunidade do Spotify" fontColor="black"></Button>
                    </Flex>
                </Center>
            </Box>
            <Footer/>
        </Box>
    );
}