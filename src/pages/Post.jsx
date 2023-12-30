import { Typography, Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {  Menu, MenuItem } from '@mui/material';

import Tooltip from '@mui/material/Tooltip';

import Swal from 'sweetalert2';

import firebasaApp from './firebaseConfig';
import { getFirestore,deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState } from 'react';

function Post ({postID, name, caption, email, timeElapsed, imageUrl}) {
    const db = getFirestore(firebasaApp);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseTool = () => {
        setAnchorEl(null);
    };

    //Handle like/heart button
    const [liked, setLiked] = useState(false);
    const handleLikeClick = () => {
        setLiked(!liked);
    };

    //Modal for editing the caption
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Function to edit the caption
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedCaption, setEditedCaption] = useState(caption);

    //This will be the authentication of a specific user
    //It will not display the edit and delete button if the post it not yours
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const isCurrentUserPost = currentUser && currentUser.email === email;

    //Handle edit function
    const handleEdit = () => {
        const updatePost = doc(db, 'posts', postID);
        updateDoc(updatePost, { caption: editedCaption });
        handleClose(false); // Exit edit mode after saving
    };

    //Delete function
    const handleDelete = () => {
        deleteDoc(doc(db, 'posts', postID ))
    }
    
    return (
        <>
            <Container component='main' maxWidth='xl' sx={{padding: 0, margin: 0}}>
            <Card  sx={{
                maxWidth: '100%',
                marginTop: '5px',
                backgroundColor: 'white',
                borderRadius: '0px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                borderColor: '#004643',
                padding: 0,
                }}
                >
            <CardHeader
                avatar={<Avatar src={imageUrl} sx={{fontSize:12}}></Avatar>}
                title={<strong>{name}<VerifiedIcon sx={{fontSize: 13, color: '#f9bc60', marginY: '-1px'}}/></strong>}
                subheader= {<small><PublicIcon sx={{fontSize: 13, color: 'grey', marginY: "-2px"}}/> · {timeElapsed}</small> }
                action={
                    isCurrentUserPost && (
                        <>
                            <Tooltip title='More options' placement='top'>
                                <IconButton onClick={handleClick}>
                                <MoreVertIcon sx={{ fontSize: 18 }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseTool}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                            >
                                <MenuItem onClick={handleOpen}>
                                    <EditIcon sx={{ fontSize: 18, marginRight: 1 }} />
                                    Edit post
                                </MenuItem>
                                <MenuItem onClick={handleDelete}>
                                    <DeleteIcon sx={{ fontSize: 18, marginRight: 1 }} />
                                    Delete post
                                </MenuItem>
                            </Menu>
                        </>
                    )
                }
            />
            <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Edit caption</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="caption"
                        label="Caption"
                        type="caption"
                        fullWidth
                        multiline
                        rows={4}
                        value={editedCaption}
                        onChange={(e) => setEditedCaption(e.target.value)}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEdit} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
                <CardContent>
                        <Typography variant='body2' color='#000000'>
                            {isEditMode ? editedCaption : caption}
                        </Typography>
                    </CardContent>
                    {/* <CardMedia
                        component="img"
                        height="194"
                        image="https://www.techspot.com/images2/trivia/bigimage/2017/2017-03-19-image-46.jpg"
                        alt="Paella dish"
                    /> */}
                    {/* <CardActions sx={{display: 'flex', justifyContent: 'flex-start', padding: 1}}>
                    <IconButton aria-label="like" onClick={handleLikeClick}>
                        {liked ? (
                            <FavoriteIcon sx={{ fontSize: 20, color: '#f9bc60' }} />
                        ) : (
                            <FavoriteBorderOutlinedIcon sx={{ fontSize: 20, color: 'grey' }} />
                        )}
                    </IconButton>
                        
                    </CardActions> */}
                </Card>
            </Container>
        </>
    )
}
export default Post