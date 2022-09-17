import { Image } from "@chakra-ui/react";

interface DefaultImageProps {
    src: string;
    alt: string;

} 

export function DefaultImage({
    src,
    alt,

}: DefaultImageProps) {
    return (
        <Image src={src} alt={alt} width="232px">

        </Image>
    );
}