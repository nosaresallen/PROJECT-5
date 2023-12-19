import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#14213d',
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
            </ThemeProvider>
            
        </>
    )
}

export default Layout