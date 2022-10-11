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
        <Image src={src} alt={alt} minWidth="232px" minHeight="232px">

        </Image>
    );
}