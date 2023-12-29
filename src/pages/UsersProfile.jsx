import { Container, Box, Typography, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Post from "./Post";

import { Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";

import { useEffect, useState } from 'react';
import firebasaApp, {storage} from './firebaseConfig';
import { getFirestore, collection, onSnapshot, addDoc, Timestamp} from "firebase/firestore";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function UsersProfile () {
    const db = getFirestore(firebasaApp);
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [post, setPost] = useState([]);
    const [profile, setProfile] = useState({
        work: '',
        education: '',
        address: '',
        contact: '',
        gender: '',
        birthday: '',
        status: ''
    });

    // This will display the name of the user
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserName(user.displayName || 'No Name');
            } else {
                setUserName(''); // Reset the user's name
            }
        });
        
        
        return () => {
            unsubscribe();
        };
        
    }, []);

    // onSnapshot(collection(db, 'posts'), snapshot => {
    //     setPost(snapshot.docs.map(post.data()));
    // })

    //Retreive data
    // onSnapshot(collection(db, 'usersprofile'), (snapshot) => {
    //     const usersData = snapshot.docs.map((doc) => ({
    //         id: doc.id, // Accessing the ID of the document
    //         ...doc.data() // Accessing the data of the document
    //     }));
    //     setPost(usersData);
    // });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        try {
            const docRef =  addDoc(collection(db, 'usersprofile'), profile);
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
        setOpen(false);
    };
    // const handleEdit = () => {
    //     const updatePost = doc(db, 'posts', postID);
    //     updateDoc(updatePost, { caption: editedCaption });
    //     handleClose(false); // Exit edit mode after saving
    // };

    const addProfile = () => {

    }
    

    return (
        <>
            <Container component='main' maxWidth='xs'  sx={{marginTop: '120px', height:'100vh'}} >
                <Box  >
                    <Box sx={{display:"flex", justifyContent: 'center', marginBottom: '20px'}}>
                        <Avatar  sx={{ width: 100, height: 100 }}>
                        </Avatar>
                    </Box>
                    <Box sx={{display:"flex", justifyContent: 'center', marginBottom: '20px'}}>
                        <Typography  variant="h5">
                            <strong>{userName}</strong>
                        </Typography>
                    </Box>
                    <Box  sx={{display:"flex", justifyContent: 'center', marginBottom: '20px'}}>
                        
                        <Button sx={{ bgcolor: '#14213d',transition: 'background-color 0.3s',
                            '&:hover':{bgcolor: '#f9bc60'}}} onClick={handleOpen} variant="contained">
                            Edit Profile
                        </Button>
                    </Box>
                    
                    <Box >
                            <hr />

                            <Typography variant="body1">
                            <WorkIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Work:</strong> {profile.work}
                            </Typography>

                            <Typography variant="body1">
                            <SchoolIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Education:</strong> {profile.education}
                            </Typography>

                            <Typography variant="body1">
                            <FmdGoodIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Address:</strong> {profile.address}
                            </Typography>

                            <Typography variant="body1">
                            <PhoneIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Contact:</strong> {profile.contact}
                            </Typography>

                            <Typography variant="body1">
                            <PersonIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Gender:</strong> {profile.gender}
                            </Typography>

                            <Typography variant="body1">
                            <CakeIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Birthday:</strong> {profile.birthday}
                            </Typography>

                            <Typography variant="body1">
                            <FavoriteIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Status:</strong> {profile.status}
                            </Typography>
                        </Box>

                        <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <TextField type="file">Upload</TextField>
                    <DialogContent>
                        {Object.keys(profile).map((key) => (
                            <TextField
                                key={key}
                                label={key.charAt(0).toUpperCase() + key.slice(1)}
                                value={profile[key]}
                                onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                                fullWidth
                                margin="normal"
                                size="small"
                            />
                        ))}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                            <Button onClick={handleClose} sx={{ marginRight: '10px' }}>
                                Cancel
                            </Button>
                            <Button onClick={handleSave} variant="contained">
                                Save
                            </Button>
                        </Box>
                    </DialogContent>
                </Dialog>
                </Box>

            </Container>
            
        </>
    )
}

export default UsersProfile