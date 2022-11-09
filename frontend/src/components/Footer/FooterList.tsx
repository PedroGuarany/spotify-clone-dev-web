import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FooterListProps{
    children?: ReactNode;
    topic: string;
}

export function FooterList({children, topic} : FooterListProps){
    return (
        <UnorderedList spacing="1rem" listStyleType="none">
            <ListItem color="darkGray">{topic}</ListItem>
            {children}
        </UnorderedList> 
    );
} 