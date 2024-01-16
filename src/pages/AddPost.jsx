import { Container, Box, Typography, TextField, Card, Avatar, CardHeader, Button } from "@mui/material";
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

    return (
        <>
            <Container component='main' maxWidth='xl'  >
                    
            <Card  sx={{
                maxWidth: '100%',
                marginTop: '3px',
                padding: 0,
                }}
                >
            <CardHeader
                avatar={
                <Tooltip title="This feature is not yet available" placement="bottom">
                    <Avatar sx={{fontSize:12}}></Avatar>
                </Tooltip>}
                title={<Typography>Spill the gossip, <strong>{userData.name}!🤭</strong></Typography>}>
            </CardHeader>
                    <Box sx={{ marginBottom: 1, marginTop: 2}}>
                    
                        
                    </Box>
                    <Box sx={{ marginBottom: '20px', display: 'flex', marginRight: 2, marginLeft: 2}}>
                        <TextField
                        fullWidth
                        id="post"
                        size="small"
                        label={`What is the gossip?`}
                        multiline
                        color="warning"
                        maxRows={4}
                        variant="outlined"
                        onChange={(e)=>{setPost(e.target.value)}}
                        value={post}
                        />
                        <Box>
                        {/* <Tooltip title="Post" placement="top">
                            <SendIcon  onClick={createPost} sx={{color: '#f9bc60', fontSize: 25, marginY: -3, marginX: 0}}/>
                        </Tooltip> */}
                        </Box>
                    </Box>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10, marginRight: 17}}>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={createPost}
                        style={{ width: '50px', height: '30px', backgroundColor: '#f9bc60' }}
                    >
                        Post
                    </Button>
                    </div>
                </Card>
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