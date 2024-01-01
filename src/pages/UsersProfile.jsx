import { Container, Box, Typography, Button, Input } from "@mui/material";
import Avatar from '@mui/material/Avatar';

import WorkspacesIcon from '@mui/icons-material/Workspaces';
import InterestsIcon from '@mui/icons-material/Interests';
import AddIcon from '@mui/icons-material/Add';
import TransgenderIcon from '@mui/icons-material/Transgender';
import MessageIcon from '@mui/icons-material/Message';
import ExtensionIcon from '@mui/icons-material/Extension';

import Tooltip from '@mui/material/Tooltip';
import { Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";

import { useEffect, useState } from 'react';
import firebasaApp, {storage} from './firebaseConfig';
import { getDownloadURL,  ref, uploadBytes } from 'firebase/storage';
import { getFirestore, updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import EditNoteIcon from '@mui/icons-material/EditNote';


function UsersProfile () {
    const db = getFirestore(firebasaApp);
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState(null);
    const fieldOrder = [
        'bio',
        'zodiac',
        'interest',
        'age',
        'gender',
        'motto',
        'hobbies'
        ];
    const [profile, setProfile] = useState({
    bio: '',
    zodiac: '',
    interest: '',
    age: '',
    gender: '',
    motto: '',
    hobbies: ''

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
                setUserId(user.uid); 
                fetchUserProfile(user.uid); 
                setUserName(user.displayName || 'No Name');
            } else {
                setUserId(null); 
                setProfile({}); 
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const fetchUserProfile = async (userId) => {
        const docRef = doc(db, 'userdetails', userId);
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
        const docRef = doc(db, 'userdetails', userId);
        try {
            await setDoc(docRef, profile); 
            console.log('Document updated');
            const fileName = new Date().getTime().toString() + file.name;
            const imageRef = ref(storage, `Profiles/${userId}/${fileName}`); 
            await uploadBytes(imageRef, file);
    
            const downloadURL = await getDownloadURL(imageRef);
            saveImageUrlToFirestore(downloadURL); 
        } catch (error) {
            console.error('Error updating document:', error);
        }
        setOpen(false);
    };

    //Firebase storage
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    
    const saveImageUrlToFirestore = async (downloadURL) => {
        const userRef = doc(db, 'userdetails', userId); 
        try {
            await updateDoc(userRef, { imageUrl: downloadURL }); 
            setImageUrl(downloadURL); 
        } catch (error) {
            console.error('Error updating image URL in Firestore:', error);
        }
    };
    
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid); 
                fetchUserProfiles(user.uid); 
                setUserName(user.displayName || 'No Name');
            } else {
                setUserId(null); 
                setProfile({});
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    
    const fetchUserProfiles = async (userId) => {
        const docRef = doc(db, 'userdetails', userId);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                setProfile(userData); 
                setImageUrl(userData.imageUrl); 
            }
        } catch (error) {
            console.error('Error fetching document:', error);
        }
    };
    
    useEffect(() => {
        if (userId) {
            fetchUserProfile(userId); 
        }
    }, [userId]);

    return (
        <>
            <Container component='main' maxWidth='xs'  sx={{marginTop: '120px', height:'100vh'}} >
                <Box  >
                    <Box sx={{display:"flex", justifyContent: 'center', marginBottom: '20px'}}>
                    {imageUrl ? (
                            <Avatar src={imageUrl} alt="Profile" sx={{ width: 100, height: 100 }} />
                        ) : (
                            <Avatar alt="Profile" sx={{ width: 100, height: 100 }} />
                        )}
                        <Tooltip title="Edit Profile" placement="right">
                            <EditNoteIcon sx={{marginX: -2, marginTop: 10, color: '#14213d' }} onClick={handleOpen}/>
                        </Tooltip>
                    </Box>
                    
                    <Box sx={{display:"flex", justifyContent: 'center', marginBottom: '10px'}}>
                        <Typography  variant="h5">
                            <strong>{userName}</strong>
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex", justifyContent: 'center', marginBottom: '20px'}}>
                        <Typography  variant="p">
                            {profile.bio}
                        </Typography>
                    </Box>
                    {/* <Box  sx={{display:"flex", justifyContent: 'center', marginBottom: '20px'}}>
                        
                        <Button sx={{ bgcolor: '#14213d',transition: 'background-color 0.3s',
                            '&:hover':{bgcolor: '#f9bc60'}}} onClick={handleOpen} variant="contained">
                            Edit Profile
                        </Button>
                    </Box> */}
                    
                    
                    <Box >
                            <hr />

                            <Typography variant="body1">
                            <WorkspacesIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Zodiac:</strong> <em>{profile.zodiac}</em>
                            </Typography>

                            <Typography variant="body1">
                            <InterestsIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Interest:</strong> <em>{profile.interest}</em>
                            </Typography>

                            <Typography variant="body1">
                            <AddIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Age:</strong> <em>{profile.age}</em>
                            </Typography>

                            <Typography variant="body1">
                            <TransgenderIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Gender:</strong> <em>{profile.gender}</em>
                            </Typography>

                            <Typography variant="body1">
                            <MessageIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Motto:</strong> <em>{profile.motto}</em>
                            </Typography>

                            <Typography variant="body1">
                            <ExtensionIcon sx={{marginLeft:'25px'}} fontSize="small"/><strong> Hobbies:</strong> <em>{profile.hobbies}</em>
                            </Typography>
                        </Box>

                        <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Profile</DialogTitle>
                    
                    
                    <DialogContent>
                    
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Avatar src={imageUrl} sx={{ width: 70, height: 70, marginX: 2 }}></Avatar>
                        <Input type="file" onChange={(e)=> {setFile(e.target.files[0])}} sx={{border: 0}}>Upload</Input>
                        {/* <Button onClick={handleUpload}>Upload</Button> */}
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