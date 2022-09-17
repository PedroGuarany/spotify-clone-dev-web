import { Image } from "@chakra-ui/react";

interface LogoProps {
  width?: [string, string, string, string];
  height?: String;
}

export function Logo({ width, height }: LogoProps) {
  return (
    <Image
      src={"/assets/logo/logoSpotify.svg"}
      alt="Logo do Spotify"
      width={width ?? ["10rem", "13rem"]}
    />
  );
}

export function LogoBlack({ width, height }: LogoProps) {
  return (
    <Image
      src={"/assets/logo/logoSpotifyBlack.svg"}
      alt="Logo do Spotify"
      width={width ?? ["5rem", "8rem"]}
    />
  );
}
