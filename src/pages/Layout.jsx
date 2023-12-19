import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNavigations from "./BottomNavigation";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#60B3D1',
            padding: 0,
            margin: 0,
        },
    },
});


function Layout () {
    return (
        <>
            <ThemeProvider theme={theme}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <BottomNavigations></BottomNavigations>
            </ThemeProvider>
            
        </>
    )
}

export default Layout