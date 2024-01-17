import { Container, Box, Typography } from "@mui/material";
import Footer from './Footer';
import Sidebar from './Sidebar';

import Grid from '@mui/material/Unstable_Grid2';
function About () {
    return (
        <>
            <Container component='main' maxWidth='xl' sx={{marginTop: 0, padding: 0}} >
                <Box>
                <Grid container spacing={2}>
                <Grid  xs={12} md={3}>
                    <Sidebar></Sidebar>
                </Grid>

                <Grid xs={12} md={6}>
                    <Box sx={{display:"flex", justifyContent: 'center', marginBottom: '20px'}}>
                        <Typography  variant="h3" sx={{color: '#f9bc60', marginX:1}}>
                            <strong>About Us</strong>
                        </Typography>
                    </Box>
                    <hr />
                    <Box sx={{marginTop: '20px', paddingLeft: 3, paddingRight: 3}}>
                        <Typography variant="body1" sx={{color: '#14213d'}}>
                        {`Gossip is a Social Media Application develop by Allen Nosares @ BASE404 Bootcamp.
                        "Gossip" is a simple app where you can anonymously share text-based gossips. 
                        Share your thoughts, update your profile, and discover what others are gossiping about. 
                        It's the ideal place to express yourself, connect with others, and stay informed within your social circle.`}
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
    )
}

export default About