import { Container, Box, Typography, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import FavoriteIcon from '@mui/icons-material/Favorite';


import { TextField } from "@mui/material";

function About () {
    return (
        <>
            <Container component='main' maxWidth='xs'  sx={{marginTop: '120px', height:'100vh'}} >
                <Box  >
                    <Box sx={{display:"flex", justifyContent: 'center', marginBottom: '20px'}}>
                        <Typography  variant="h3" sx={{color: '#f9bc60', marginX:1}}>
                            <strong>About Us</strong>
                        </Typography>
                    </Box>
                    <hr />
                    <Box sx={{marginTop: '20px'}}>
                        <Typography variant="body1" sx={{color: '#14213d'}}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, unde nesciunt consequuntur odio provident a fugiat odit! Nihil sunt earum atque, quaerat quae suscipit a ab vitae placeat eveniet sapiente deleniti aliquam voluptatibus mollitia voluptas nobis rerum odio saepe illum recusandae necessitatibus quibusdam culpa praesentium. Error dolorem et totam quidem.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default About