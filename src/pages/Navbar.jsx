import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import { Link as RouterLink} from "react-router-dom";
function Navbar () {

    return (
        <Box sx={{flexGrow: 1, marginBottom: 10}}>
        <AppBar position='fixed'
            sx={{
            bgcolor: '#14213d',
            color: '#f9bc60',
            padding: '15px' ,
            display: 'flex',
            justifyContent: 'center'
            }}>
            <Grid sx={{display: 'flex', justifyContent: 'center'}}>
                <Grid sx={{marginX: 2}}> 
                <RouterLink to='/' style={{textDecoration: 'none', color: '#f9bc60'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* <Avatar src={'/src/assets/whisper.png'} sx={{ bgcolor: '#f9bc60', marginRight: 1 }} /> */}
                        <Typography variant='h4' component='div' sx={{ flexGrow: 1, fontSize: '25px' }}>
                            <strong>Gossip.</strong>
                        </Typography>
                    </Box>
                </RouterLink>
                
                </Grid>
                
            </Grid>
            
        </AppBar>
        </Box>
    )
}

export default Navbar