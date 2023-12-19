import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CoffeeTwoToneIcon from '@mui/icons-material/CoffeeTwoTone';


import Swal from 'sweetalert2';

import firebasaApp from '../firebaseConfig';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useState, useEffect} from 'react';

function Register () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const auth = getAuth(firebasaApp);

    let navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // window.location.reload();
                navigate('/');
                
                
            }
        });

    },[]);

    

    const handleRegister = () => {
        if (
            name !== '' && 
            email !== '' && 
            password !== '' && 
            confirmPassword !== '' && 
            password === confirmPassword 
            ){
            createUserWithEmailAndPassword(auth, email, password).then(
                (useCredentials) => {
                    const user = useCredentials.user;
                    updateProfile(auth.currentUser,{
                        displayName: name
                    })
                    setTimeout(() => {
                        window.location.reload();
                    }, 10);
                })
                .catch(() => {
                    Swal.fire({
                        toast: true,
                        title: "Registration Failed!",
                        text: "Invalid credentials.",
                        icon: "error",
                        confirmButtonColor: "black"
                    });
                });
        }else{
            Swal.fire({
                toast: true,
                title: "Please input correct credentials",
                icon: "warning",
                confirmButtonColor: "black"
            });
        }
        
    }

    //Validation of Email
    const [error, setError] = useState(false);

    //Handle the email
    const handleEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
        setError(!isValidEmail);
    };

    return (
        <>
            <Container component='main' maxWidth='xs'>
                {/* <Typography component="h1" variant="h5"
                sx={{
                    marginTop: "50px",
                    color: '#E78FB3',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    Welcome to <span style={{color: '#55423D', fontWeight: "bold",}}>Teasmis</span>
                </Typography> */}
                <Box  sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '50px',
                    borderRadius: '10px',
                }}>
                    
                    <Avatar sx={{ marginTop: '-20px', bgcolor: '#14213d', marginBottom: '10px' }}>
                        <CoffeeTwoToneIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ fontWeight: "bold", color: '#001e1d' }}>
                        Register
                    </Typography>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        color='warning'
                        size="small"
                        id='name'
                        type='name'
                        name='name'
                        label='Full name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        color='warning'
                        size="small"
                        id='email'
                        type='email'
                        name='email'
                        label='Email Address'
                        onChange={handleEmail}
                        value={email}
                        error={error}
                        helperText={error ? 'Invalid email format' : ''}
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        color='warning'
                        size="small"
                        id='password'
                        type='password'
                        name='password'
                        label='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        color='warning'
                        size="small"
                        id='password'
                        type='password'
                        name='password'
                        label='Confirm password'
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant='contained'
                        sx={{
                            mt: 3,
                            bgcolor: '#14213d',
                            transition: 'background-color 0.3s',
                            '&:hover':{backgroundColor: '#f9bc60'}
                        }}
                        onClick={()=>handleRegister()}
                    >
                        Register
                    </Button>
                    <Grid container justifyContent='flex-end' sx={{marginTop: '5px'}}>
                        <Grid item>
                            <Typography variant='body2'>
                                <RouterLink to='/login' style={{textDecoration: 'none', color: '#14213d', fontSize: 12}}>
                                    {`Already have an account? Login here.`}
                                </RouterLink>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography sx={{marginTop: 20, fontSize: 12}} variant="body2" color="text.secondary" align="center" >
                        {'Develop by Allen Nosares'}
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Register