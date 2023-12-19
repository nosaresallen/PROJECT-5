import { Box, Typography } from "@mui/material";

function Footer () {


    return (
        <>
        <Box sx={{ marginTop: 5, display:'flex', justifyContent:'center', color: '#14213d'}}>
            <Typography sx={{fontSize: '13px'}}>
                Made with 💗 by <strong>Allen Nosares</strong>
            </Typography>              
        </Box>
        </>
    )
}

export default Footer