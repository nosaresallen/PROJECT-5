import { Container, Box, Typography, Button, Input } from "@mui/material";
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
import { ref } from 'firebase/storage';
import { getFirestore, collection, onSnapshot, addDoc, Timestamp, doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function UsersProfile () {
    const db = getFirestore(firebasaApp);
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [post, setPost] = useState([]);
    const [userId, setUserId] = useState(null);
    const fieldOrder = ['work', 'education', 'address', 'contact', 'gender', 'birthday', 'status'];
    const [profile, setProfile] = useState({
        work: '',
        education: '',
        address: '',
        contact: '',
        gender: '',
        birthday: '',
        status: ''
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid); // Set the user ID
                fetchUserProfile(user.uid); // Fetch user profile data
                setUserName(user.displayName || 'No Name');
            } else {
                setUserId(null); // Reset user ID if no user is logged in
                setProfile({}); // Reset profile data
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const fetchUserProfile = async (userId) => {
        const docRef = doc(db, 'usersprofile', userId);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProfile(docSnap.data());
            } 
        } catch (error) {
            console.error('Error fetching document:', error);
        }
    };

    const handleSave = async () => {
        const docRef = doc(db, 'usersprofile', userId);
        try {
            await setDoc(docRef, profile); // Set or update the user's profile in Firestore
            console.log('Document updated');
        } catch (error) {
            console.error('Error updating document:', error);
        }
        setOpen(false);
    };
    // const handleEdit = () => {
    //     const updatePost = doc(db, 'posts', postID);
    //     updateDoc(updatePost, { caption: editedCaption });
    //     handleClose(false); // Exit edit mode after saving
    // };

    const uploadImage = () => {
        alert('upload image');
    }
    
    const [imageUpload, setImageUpload] = useState(null);
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
                    
                    
                    <DialogContent>
                    
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Avatar  sx={{ width: 70, height: 70, marginX: 2 }}>
                        </Avatar>
                        <Input type="file" onChange={(e)=> {setImageUpload(e.target.files[0])}} sx={{border: 0}}>Upload</Input>
                    </Box>
                        {fieldOrder.map((key) => (
                            <TextField
                                key={key}
                                label={key.charAt(0).toUpperCase() + key.slice(1)}
                                value={profile[key]}
                                onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                                fullWidth
                                margin="normal"
                                size="small"
                                color='warning'
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