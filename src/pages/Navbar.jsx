import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar, Grid } from '@mui/material';

import Swal from 'sweetalert2';
import firebasaApp from './firebaseConfig';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getAuth, signOut  } from "firebase/auth";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';



function Navbar () {

    let navigate = useNavigate();
    
        //Logout function
        const handleLogout = () => {
            Swal.fire({
                toast: true,
                title: 'Log out of your account?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#14213d',
                cancelButtonColor: '#f9bc60',
                confirmButtonText: 'Logout'
            }).then((result) => {
                if (result.isConfirmed) {
                    const auth = getAuth(firebasaApp); 
                    signOut(auth)
                        .then(() => {
                            navigate('/login');
                        })
                        .catch((error) => {
                            console.log('Error during logout:', error);
                    });
                }
            });
        };

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
            <Grid sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Grid sx={{marginX: 2}}> 
                <RouterLink to='/' style={{textDecoration: 'none', color: '#f9bc60'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={'/src/assets/whisper.png'} sx={{ bgcolor: '#f9bc60', marginRight: 1 }} />
                        <Typography variant='h4' component='div' sx={{ flexGrow: 1, fontSize: '20px' }}>
                            <strong>Gossip.</strong>
                        </Typography>
                    </Box>
                </RouterLink>
                
                </Grid>
                <Grid>
                <Box sx={{ display: 'flex', alignItems: 'center', marginX:1 }}>
                            <RouterLink to='/usersprofile' >
                                <Tooltip title="Profile" placement="bottom">
                                    <AccountCircleIcon sx={{fontSize: 28, color: '#f9bc60', marginRight: 2}}/>
                                </Tooltip>
                            </RouterLink>
                            <RouterLink onClick={handleLogout}>
                                <Tooltip title="Logout" placement="bottom">
                                <LogoutOutlinedIcon sx={{fontSize: 28, color: '#f9bc60'}}/>
                                </Tooltip>
                                
                            </RouterLink>
                        </Box>
                </Grid>
            </Grid>
            
        </AppBar>
        </Box>
    )
}

export default Navbar