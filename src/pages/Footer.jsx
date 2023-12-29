import { Box, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer () {


    return (
        <>
        <Box sx={{ marginTop: 5, display:'flex', justifyContent:'center', color: '#14213d'}}>
            <Typography sx={{fontSize: '13px'}}>
                Made with <FavoriteIcon sx={{fontSize: '18px', marginY: '-3px', color: '#f9bc60'}}/> by <strong>Allen Nosares</strong>
            </Typography>              
        </Box>
        </>
    )
}

export default Footer