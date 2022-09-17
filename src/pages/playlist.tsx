import { Box } from "@chakra-ui/react";
import { Playlist } from "../components/Playlist";

export default function playlist() {
  return (
    <>
      <Box width="100%" height="100vh" background={"#fff"}>
        <Playlist />
      </Box>
    </>
  );
}
