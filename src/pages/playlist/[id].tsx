import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PlaylistComponent } from "../../components/Playlist";

export default function Playlist() {  
    const router = useRouter();
    const {id} = router.query;
    
    return (
      <Box width="100%" height="100%" background={"#000"}>
        <PlaylistComponent />
      </Box>
  );
}
