import { Container, Box, Typography, TextField } from "@mui/material";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';

import Swal from 'sweetalert2';

import { useEffect, useState } from 'react';
import firebasaApp from './firebaseConfig';
import { getFirestore, collection, onSnapshot, addDoc, Timestamp} from "firebase/firestore";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AddPost () {
    const db = getFirestore(firebasaApp);
    const auth = getAuth(firebasaApp);
    let navigate = useNavigate();

    const [post, setPost] = useState('');
    const [userData,setUserData] = useState('');
    
    //Add post to firestore
    const createPost = () => {
        if(post !== ''){

            const postData = {
                caption: post,
                date_posted: Timestamp.now(),
                user_email: userData.email,
                name: userData.name
            }
            
            addDoc(collection(db, 'posts'),postData ).then(()=>{
                setPost('');
            })

            
        }else{
            Swal.fire({
                toast: true,
                title: "Caption cannot be empty",
                icon: "warning",
                confirmButtonColor: "black"
            });
        }
    }


    useEffect(()=> {
        onAuthStateChanged(auth, (user)=>{
            if(user) {
                setUserData({
                    email: user.email,
                    name: user.displayName
                })
            }else {
                navigate("/login");
            }
        });

        onSnapshot(collection(db, 'posts'), snapshot => {
            setPost(snapshot.docs.map(post.data()));
        })
        
    }, [])

    const handleImage = ()=>{
        alert('This feature is not yet available');
    }


    return (
        <>
            <Container component='main' maxWidth='md' sx={{borderColor: '#14213d',
                borderLeft: 3, bgcolor: '#FEFCF3', borderRadius: '10px', boxShadow: 2, position:'sticky', padding: 2, marginTop: 1}} >
                    {/* <Typography sx={{ fontSize: 15 }}>
                        Spill the gossip, <strong style={{color: '#f9bc60'}}>{userData.name}!</strong> <br />
                    </Typography> */}
                <Box >
                    {/* <Box sx={{display:"flex", justifyContent: 'center', marginBottom: '20px'}}>
                        <Avatar sx={{ width: 100, height: 100 }}>
                        </Avatar>
                        
                    </Box> */}
                    <Box sx={{ marginBottom: 1, marginTop: 2}}>
                    
                        
                    </Box>
                    <Box sx={{ marginBottom: '20px', display: 'flex'}}>
                        
                        <TextField
                        fullWidth
                        id="post"
                        size="small"
                        label={`What is the gossip?`}
                        multiline
                        color="warning"
                        maxRows={4}
                        variant="standard"
                        onChange={(e)=>{setPost(e.target.value)}}
                        value={post}
                        />
                        <Box>
                        {/* <Tooltip title="Upload Image" placement="top">
                            <InsertPhotoIcon onClick={handleImage}  sx={{color: '#14213d', fontSize: 16, marginY: 3, marginX: 2}}/>
                        </Tooltip> */}
                        <Tooltip title="Post" placement="top">
                            <SendIcon  onClick={createPost} sx={{color: '#f9bc60', fontSize: 25, marginY: -3, marginX: 0}}/>
                        </Tooltip>
                        </Box>
                        
                        
                        
                    </Box>
                </Box>
                {/* <Card sx={{ maxWidth: '100%', marginTop: '5px', bgcolor: 'white', marginBottom: 3 }}>
                    
                    <CardContent  sx={{ borderColor: 'black', border:0}}>
                        <Typography variant="body2" color="text.secondary">
                        {post}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://www.techspot.com/images2/trivia/bigimage/2017/2017-03-19-image-46.jpg"
                        alt="Paella dish"
                    />
                </Card> */}
            </Container>
            
        </>
    )
}

export default AddPost