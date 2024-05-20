import { Box, Typography } from "@mui/material"

import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";


const Layout = ()=>{

    return(

        <Box 
        display={"flex"} flexDirection={"column"} 
        sx={{ width: "100%", height: "100vh", marginTop: 0, paddingTop: 0 }}
        >
            
            <NavBar />
            <Outlet></Outlet>
        </Box>
    )
}

export default Layout;