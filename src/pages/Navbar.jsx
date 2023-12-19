import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

function Navbar () {
    return (
        <Box sx={{flexGrow: 1, marginBottom: 10}}>
        <AppBar position='fixed'
            sx={{
            bgcolor: '#0B0C10',
            color: '#66FCF1',
            padding: '15px' ,
            textAlign:'start',
            paddingLeft: '200px', 
            }}>
            <Box sx={{ display: 'flex', alignItems:'center'}}>
            <Avatar src={'/src/assets/whisper.png'} sx={{bgcolor: '#66FCF1', marginRight: 1}}>
            </Avatar> 
            <Typography variant='h4' component='div' sx={{flexGrow: 1, fontSize: '20px'}}>
                <strong>Gossip.</strong>
            </Typography>
            
            </Box>
        </AppBar>
        </Box>
    )
}

export default Navbar