import { Header } from "../Header";
import { PremiumSection } from "./PremiumSection";
import { PremiumSectionDois } from "./PremiumSectionDois";
import { PremiumSectionTres } from "./PremiumSectionTres";

export function Premium() {
    return (
        <>
        <Header />
        <PremiumSection />
        <PremiumSectionDois />
        <PremiumSectionTres />
        </>
    );
}