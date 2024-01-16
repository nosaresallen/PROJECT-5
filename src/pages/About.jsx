import { Container, Box, Typography } from "@mui/material";

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
                        {`Gossip is a Social Media Application develop by Allen Nosares @ BASE404 Bootcamp.
                        "Gossip" is a simple app where you can anonymously share text-based gossips. 
                        Share your thoughts, update your profile, and discover what others are gossiping about. 
                        It's the ideal place to express yourself, connect with others, and stay informed within your social circle.`}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default About