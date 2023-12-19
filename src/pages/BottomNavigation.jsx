import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import Swal from 'sweetalert2';
import firebasaApp from './firebaseConfig';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getAuth, signOut  } from "firebase/auth";


export default function BottomNavigations() {
    let navigate = useNavigate();

    //Logout function
    const handleLogout = () => {
        Swal.fire({
            toast: true,
            title: 'Log out of your account?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#004643',
            cancelButtonColor: '#000000',
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

    const refreshAndScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    
        // Reload the page after a short delay to ensure it starts at the top
        setTimeout(() => {
            window.location.reload();
        }, 100); // Refresh after 100 milliseconds (adjust this value as needed)
    };


    return (
        <>
            <Box sx={{marginTop: 10}}>
            <CssBaseline />
            <Paper sx={{ bgcolor:'white', position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent:'center', alignItems:'center' }} elevation={3}>
                {/* <RouterLink to='/'>
                <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon sx={{ color:'#004643',transition: 'background-color 0.3s',
                            '&:hover':{color: '#f9bc60'}}} />} />
                </RouterLink> */}

                {/* <RouterLink to='/addpost'>
                <BottomNavigationAction  label="post" icon={<ControlPointIcon sx={{ color:'#004643',transition: 'background-color 0.3s',
                            '&:hover':{color: '#f9bc60'}}} />} />
                </RouterLink> */}

                {/* <RouterLink to='/usersprofile'>
                <BottomNavigationAction  label="Profile" icon={<AccountCircleOutlinedIcon sx={{ color:'#004643',transition: 'background-color 0.3s',
                            '&:hover':{color: '#f9bc60'}}}/>} />
                </RouterLink> */}
                
                
                
                <RouterLink>
                <BottomNavigationAction onClick={handleLogout}  label="Logout" icon={<LogoutOutlinedIcon sx={{ color:'#004643',transition: 'background-color 0.3s',
                            '&:hover':{color: '#f9bc60'}}}/>} />
                </RouterLink>

            </Paper>
            </Box>
        </>
        
    );
    }

    