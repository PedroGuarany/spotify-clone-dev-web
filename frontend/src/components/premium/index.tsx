import { Box } from "@chakra-ui/react";
import { Header } from "../Header";
import { PremiumSection } from "./PremiumSection";
import { PremiumSectionDois } from "./PremiumSectionDois";

export function Premium() {
    return (
        <>
        <Header />
        <PremiumSection />
        <PremiumSectionDois />
        </>
    );
}