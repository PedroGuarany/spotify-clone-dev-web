import { Box, Image, LinkOverlay } from "@chakra-ui/react";
import { NavigationOption } from "./NavigationOption";

interface LogoProps {
  width?: [string, string, string, string];
  height?: String;
}

export function Logo({ width, height }: LogoProps) {
  return (
    <NavigationOption link={"/"}>
      <Image
        src={"/assets/logo/logoSpotify.svg"}
        alt="Logo do Spotify"
        width={width ?? ["10rem", "13rem"]}
        >
      </Image>
    </NavigationOption>
  );
}

export function LogoBlack({ width, height }: LogoProps) {
  return (
    <NavigationOption link={"/"}>
      <Image
        src={"/assets/logo/logoSpotifyBlack.svg"}
        alt="Logo do Spotify"
        width={width ?? ["5rem", "8rem"]}
        />
    </NavigationOption>
  );
}
