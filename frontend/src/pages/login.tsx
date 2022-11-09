import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Line } from "../components/Common/Line";
import { LoginComponent } from "../components/Login";
import { HeaderRegister } from "../components/Register/HeaderRegister";

export default function Login() {
    const router = useRouter();

    if(localStorage.getItem("password") || sessionStorage.getItem("password")){
        router.push("/playlists"); 
        return;
    }

    return (
        <>
            <HeaderRegister text={""} />
            <Line />
            <Box width="28rem" display="flex" alignItems="center" flexDirection="column" margin="0 auto" paddingRight={[23, 23, 23, 0]}
            paddingLeft={[23, 23, 23, 0]}>
                <LoginComponent />
            </Box>
        </>
    )
}