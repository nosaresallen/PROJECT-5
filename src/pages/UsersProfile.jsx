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
import firebasaApp from './firebaseConfig';
import { getFirestore, collection, onSnapshot, addDoc, Timestamp} from "firebase/firestore";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function UsersProfile () {
    const db = getFirestore(firebasaApp);
    const [userName, setUserName] = useState('');

    //This will display the name of the user
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, get the user's name
                setUserName(user.displayName || 'No Name'); // Set the user's name to state
            } else {
                // User is signed out
                setUserName(''); // Reset the user's name
            }
        });
        return () => {
            // Unsubscribe the listener when the component unmounts
            unsubscribe();
        };
    }, []);

    

    // const editProfile = () => {
    //     alert('Edit profile');
    // }

    const [profile, setProfile] = useState({
        work: '',
        education: '',
        address: '',
        contact: '',
        gender: '',
        birthday: '',
        status: ''
    });
    const [open, setOpen] = useState(false); // Dialog open/close state

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        // Logic to save updated profile object to the database
        try {
            const docRef =  addDoc(collection(db, 'usersprofile'), profile);
            console.log('Document written with ID: ', docRef.id);
            setOpen(false); // Close the dialog after saving
        } catch (e) {
            console.error('Error adding document: ', e);
        }
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
                        <Avatar sx={{ width: 100, height: 100 }}>
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
                            
                            
                            <Typography variant="body1  ">
                            <WorkIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Work:</strong> 
                            </Typography>

                            <Typography variant="body1">
                            <SchoolIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Education:</strong> 
                            </Typography>

                            <Typography variant="body1">
                            <FmdGoodIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Address:</strong> 
                            </Typography>

                            <Typography variant="body1">
                            <PhoneIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Contact:</strong> 
                            </Typography>

                            <Typography variant="body1">
                            <PersonIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Gender:</strong> 
                            </Typography>

                            <Typography variant="body1">
                            <CakeIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Birthady:</strong> 
                            </Typography>

                            <Typography variant="body1">
                            <FavoriteIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Status:</strong> 
                            </Typography>
                        </Box>

                        <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogContent>
                        {Object.keys(profile).map((key) => (
                            <TextField
                                key={key}
                                label={key.charAt(0).toUpperCase() + key.slice(1)}
                                value={profile[key]}
                                onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                                fullWidth
                                margin="normal"
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