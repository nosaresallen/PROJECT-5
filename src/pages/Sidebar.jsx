import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import Swal from 'sweetalert2';
import firebasaApp from './firebaseConfig';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getAuth, signOut  } from "firebase/auth";

function Sidebar(){
    
    const isSmallScreen = useMediaQuery('(max-width:768px)');
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

        const handleRefresh = () => {
            // Reload the page
            window.location.reload();
        };

    return (
        <Container component="main" maxWidth="xl">
        <Card
            sx={{
            maxWidth: '100%',
            marginTop: '3px',
            padding: 2,
            display: 'flex',
            flexDirection: isSmallScreen ? 'row' : 'column',
            justifyContent: isSmallScreen ? 'space-between' : 'flex-start',
            }}
        >
            <Button sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: 'black',
            '&:hover': {
                color: '#f9bc60',
            },
            }}
            onClick={handleRefresh}
            >
            <HomeOutlinedIcon />
                <Typography sx={{marginLeft: 1}}>
                {isSmallScreen ? null : 'Home'}
                </Typography>
            </Button>

            {/* <Button sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: 'black',
            '&:hover': {
                color: '#f9bc60',
            },
            }}
            >
            <SearchOutlinedIcon />
                <Typography sx={{marginLeft: 1}}>
                {isSmallScreen ? null : 'Search'}
                </Typography>
            </Button> */}

            {/* <Button sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: 'black',
            '&:hover': {
                color: '#f9bc60',
            },
            }}
            >
                <ExploreOutlinedIcon />
                <Typography sx={{marginLeft: 1}}>
                {isSmallScreen ? null : 'Explore'}
                </Typography>
            </Button> */}

            <RouterLink to='/message' style={{textDecoration: 'none', color: 'black'}}>
            <Button sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: 'black',
            '&:hover': {
                color: '#f9bc60',
            },
            }}
            >
                <MailOutlinedIcon />
                <Typography sx={{marginLeft: 1}}>
                {isSmallScreen ? null : 'Messages'}
                </Typography>
            </Button>
            </RouterLink>

            {/* <Button sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: 'black',
            '&:hover': {
                color: '#f9bc60',
            },
            }}
            >
                <FavoriteBorderOutlinedIcon />
                <Typography sx={{marginLeft: 1}}>
                {isSmallScreen ? null : 'Notifications'}
                </Typography>
            </Button> */}

            {/* RouterLink to='/usersprofile'  */}
            <RouterLink to='/about' style={{textDecoration: 'none', color: 'black'}}>
            <Button sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: 'black',
            '&:hover': {
                color: '#f9bc60',
            },
            }}
            >
                <InfoOutlinedIcon />
                <Typography sx={{marginLeft: 1}}>
                {isSmallScreen ? null : 'About'}
                </Typography>
            </Button>
            </RouterLink>

            <RouterLink to='/usersprofile' style={{textDecoration: 'none', color: 'black'}}>
            <Button sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: 'black',
            '&:hover': {
                color: '#f9bc60',
            },
            }}
            >
                <AccountCircleOutlinedIcon />
                <Typography sx={{marginLeft: 1}}>
                {isSmallScreen ? null : 'Profile'}
                </Typography>
            </Button>
            </RouterLink>

            <Button sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: '#f9bc60',
            '&:hover': {
                color: 'red',
            },
            }}
            onClick={handleLogout}
            >
            <LogoutOutlinedIcon />
                <Typography sx={{marginLeft: 1}}>
                {isSmallScreen ? null : 'Logout'}
                </Typography>
            </Button>   
            
    
        </Card>
        {/* <Card
            sx={{
            maxWidth: '100%',
            marginTop: '3px',
            padding: 2,
            display: 'flex',
            flexDirection: isSmallScreen ? 'row' : 'column',
            justifyContent: isSmallScreen ? 'space-between' : 'flex-start',
            }}
        >
        </Card> */}
        </Container>
    );
}

export default Sidebar;
