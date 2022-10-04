import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Playlist } from "../../components/Playlist";

export default function playlist() {
    const router = useRouter();
    const {id} = router.query;
    
    return (
      <Box width="100%" height="100vh" background={"#fff"}>
        <Playlist id={id}/>
      </Box>
  );
}
