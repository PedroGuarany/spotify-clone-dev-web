import { Box } from "@chakra-ui/react";
import { Line } from "../Common/Line";
import { HeaderRegister } from "../Register/HeaderRegister";
import { LoginComponent } from "./LoginComponent";

export function LoginScreen() {
    return (
        <>
            <HeaderRegister text={""} />
            <Line />
            <Box width="28rem" display="flex" alignItems="center" flexDirection="column" margin="0 auto" paddingRight={[23, 23, 23, 0]}
            paddingLeft={[23, 23, 23, 0]}>
                <LoginComponent />
            </Box>
        </>
    );
}