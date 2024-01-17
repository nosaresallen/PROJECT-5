
import firebasaApp from './firebaseConfig';
import { getFirestore, collection, onSnapshot} from "firebase/firestore";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {  Box,  Container, Typography,} from "@mui/material";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import IconButton from '@mui/material/IconButton';
import Post from "./Post";
import AddPost from './AddPost';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Tooltip from '@mui/material/Tooltip';

import Grid from '@mui/material/Unstable_Grid2';

import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
function Home () {
    const db = getFirestore(firebasaApp);
    const auth = getAuth(firebasaApp);
    const [userData, setUserData] = useState(null);
    let navigate = useNavigate();

    const [post, setPost] = useState([]);

    const storage = getStorage(firebasaApp); // Get the Firebase Storage instance from your firebaseConfig

    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const storageRef = ref(storage, 'Profiles/'); // Reference to the 'Profiles' folder in Firebase Storage

        const fetchImageURLs = async () => {
            try {
                const imageList = await listAll(storageRef);
                const imageURLs = await Promise.all(
                    imageList.items.map(async (itemRef) => {
                        const url = await getDownloadURL(itemRef);
                        return url;
                    })
                );
                setImageUrls(imageURLs);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImageURLs();
    }, [storage]);

    useEffect(()=> {
        //Authentication
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

        //Retreive data
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            const postData = snapshot.docs.map((doc) => ({
                id: doc.id, // Accessing the ID of the document
                ...doc.data() // Accessing the data of the document
            }));
            setPost(postData);
        });
    }, []);


    //This function will calculate the current time and post creation time
    function getTimeElapsed(date_posted) {
        const now = new Date();
        const diff = now.getTime() - date_posted.getTime();
    
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const years = Math.floor(days / 365);
    
        if (seconds < 60) {
            return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
        } else if (minutes < 60) {
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (hours < 24) {
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (days < 7) {
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        } else if (weeks < 52) {
            return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
        } else {
            return `${years} year${years !== 1 ? 's' : ''} ago`;
        }
    }

    //Sort post by date_posted in desceding order
    const sortedPosts = [...post].sort((a, b) => b.date_posted.toDate() - a.date_posted.toDate());

    const backTopTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };
    return (
        <>
            <Container component='main' maxWidth='xl' sx={{marginTop: 0, padding: 0}}>   
                <Box >
                    <Grid container spacing={2}>
                        <Grid  xs={12} md={3}>
                            <Sidebar></Sidebar>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <AddPost></AddPost>
                            {sortedPosts.map((postRecord) => (
                                <Post 
                                    key={postRecord.id}
                                    caption={postRecord.caption}
                                    email={postRecord.user_email}
                                    name={postRecord.name}
                                    postID={postRecord.id}
                                    date_posted={postRecord.date_posted.toDate()}
                                    timeElapsed={getTimeElapsed(postRecord.date_posted.toDate())}
                                    imageUrl={imageUrls}

                                />
                            ))}
                            <Box>
                            <Typography sx={{fontSize:'12px',marginTop: 1, display:'flex', justifyContent:'center', color: '#14213d'}}>
                                Back to top
                                <Tooltip title="Back to top" placement="top">
                                    <IconButton onClick={backTopTop}>
                                        <ArrowUpwardOutlinedIcon sx={{ marginY:-2, marginX: 0, color: '#14213d'}}/>
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                            
                            </Box>
                            
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Footer></Footer>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            
        </>
    );
    
}

export default Home