import { ListItem, Text } from "@chakra-ui/react";
import { NavigationOption } from "../Common/NavigationOption";

interface FooterListOptionProps{
    link: string,
    text: string
}

export function FooterListOption({link, text}: FooterListOptionProps){
    return (
        <ListItem>
            <NavigationOption link={link}>
                <Text textStyle="defaultText" _hover = {{color: "#1ED760"}}>{text}</Text>
            </NavigationOption>
        </ListItem>
    );
}