import { Box, Typography } from "@mui/material";

function Footer () {


    return (
        <>
        <Box sx={{ marginTop: 5, display:'flex', justifyContent:'center', color: 'white'}}>
            <Typography sx={{fontSize: '13px'}}>
                Made with 💗 by <strong>Allen Nosares</strong>
            </Typography>              
        </Box>
        
            {/* <Container component='main' maxWidth='xs'  sx={{marginTop: '15px', borderRadius: 2, boxShadow: 20, padding:0}} >
                    
                <Box >
                    <Box sx={{ marginBottom: 1, marginTop: 2}}>
                        
                        
                    </Box>
                    
                </Box>
            </Container> */}
            
        </>
    )
}

export default Footer