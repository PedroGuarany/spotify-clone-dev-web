import { Box, Flex, Text } from "@chakra-ui/react";

export function PremiumSectionDois() {
    return (
        <Box width="100vw">
            <Flex width="1170px" margin="auto" padding="75px 15px" flexDirection="column">
                <Text margin="auto" marginBottom="72px" fontSize="40px" fontWeight="900">Por que ser Premium?</Text>
                <Flex>
                    <DefaultItems url="url('https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f')" title={"Modo offline."} text={"Ouça música onde estiver."} />
                    <DefaultItems url="url('https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137')" title={"Ouça músicas sem anúncios."} text={"Curta música sem anúncios."} />
                    <DefaultItems url="url('https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67')" title={"Ouça na ordem que quiser."} text={"Qualquer música em qualquer ordem."} />
                    <DefaultItems url="url('https://content-tooling.spotifycdn.com/images/4a4fc24a-69b3-476b-b6d9-e7597cda526e_enhance_icon_(1).svg')" title={"Qualidade de som superior"} text={"Sinta o som."} />
                </Flex>
            </Flex>
        </Box>
    );
}

interface ItemsProps {
    url: string;
    title: string;
    text: string;
}
 const DefaultItems = ({url, title, text} : ItemsProps) => {
    return (
        <Flex width="270px" flexDirection="column">
            <Box width="142px" height="142px" margin="0px auto 40px" backgroundImage={url} backgroundRepeat="no-repeat" backgroundSize="contain"></Box>
            <Flex margin="16px 0" flexDirection="column" textAlign="center" gap="10px">
                <Text fontSize="21px" fontWeight="900">{title}</Text>
                <Text width="85%" margin="0 auto" fontSize="16px" lineHeight="1.5">{text}</Text>
            </Flex>
        </Flex>
    );
}