import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CoffeeTwoToneIcon from '@mui/icons-material/CoffeeTwoTone';

import Swal from 'sweetalert2'

import firebasaApp from '../firebaseConfig';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect} from 'react';

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const auth = getAuth(firebasaApp);

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                navigate('/');
            }
        });
    },[]);
    

    //Navigate to home page after logging in
    const handleLogin = () =>{
        if(email !== '' && password !== ''){
            signInWithEmailAndPassword(auth, email, password)
            .then(()=>{
                Swal.fire({
                    toast: true,
                    title: "Login successful!",     
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
            })
            navigate('/')
        }).catch(() => {
            Swal.fire({
                toast: true,
                title: "Login Failed!",
                text: "Invalid email or password.",
                icon: "error",
                confirmButtonColor: "#000000"
            });
        });
        }else {
            Swal.fire({
                toast: true,
                title: "Please fill out the fields.",
                icon: "warning",
                confirmButtonColor: "black",
                customClass: {
                    confirmButton: 'swal-confirm-right' // Adding a custom class for the button
                },
            });
        }
    }

    //Validation of email
    const [error, setError] = useState(false);

    //Handle the email
    const handleEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue)

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
        setError(!isValidEmail);
    }

    return (
        <>
            <Container component='main' maxWidth='xs' >
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
                <Box sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '50px'
                }}>
                    
                    <Avatar sx={{ marginTop: '-20px', bgcolor: '#004643', marginBottom: '10px' }}>
                        <CoffeeTwoToneIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ fontWeight: "bold", color: '#001e1d' }}>
                        Login
                    </Typography>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        size="small"
                        id='email'
                        type='email'
                        name='email'
                        label='Email Address'
                        value={email}
                        error={error}
                        helperText={error ? 'Invalid email format' : ''}
                        onChange={handleEmail}
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        size="small"
                        id='password'
                        type='password'
                        name='password'
                        label='Password'
                        value={password}

                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant='contained'
                        sx={{
                            mt: 3,
                            bgcolor: '#004643',
                            transition: 'background-color 0.3s',
                            '&:hover':{backgroundColor: '#abd1c6'}
                        }}
                        onClick={()=> handleLogin()}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent='flex-end' sx={{marginTop: '5px'}}>
                        <Grid item>
                            <Typography variant='body2'>
                                <RouterLink to='/register' style={{textDecoration: 'none', color: '#001e1d', fontSize: 12}}>
                                    {`Don't have an account? Register here.`}
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

export default Login