import { Box, Typography, useMediaQuery } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';

function Footer() {
    const isSmallScreen = useMediaQuery('(max-width:768px)'); 
    if (isSmallScreen) {
        return null;
    }

    return (
        <>
        <Container component="main" maxWidth="xl">
            <Card
            sx={{
                maxWidth: '100%',
                marginTop: '3px',
                padding:2,
            }}
            >
            <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>Gossips for you</Typography>
            <Typography sx={{ fontSize: 12, color: 'grey' }}>Trending in Philippines</Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 'bold' }}>#TaylorSwiftCourse</Typography>
            <Typography sx={{ fontSize: 12, color: 'grey' }}>Trending in Philippines</Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 'bold' }}>#JeepneyPhaseout</Typography>
            <Typography sx={{ fontSize: 12, color: 'grey' }}>Trending in Philippines</Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 'bold' }}>#PhilHealthDataLeak</Typography>
            <Typography sx={{ fontSize: 12, color: 'grey' }}>Trending in Philippines</Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 'bold' }}>#299EngagementRing</Typography>
            </Card>
        </Container>
        <Box sx={{ marginTop: 5, display: 'flex', justifyContent: 'center', color: '#14213d' }}>
            <Typography sx={{ fontSize: '13px' }}>
            Made with <FavoriteIcon sx={{ fontSize: '18px', marginY: '-3px', color: '#f9bc60' }} /> by{' '}
            <strong>Allen Nosares</strong>
            </Typography>
        </Box>
        </>
    );
}

export default Footer;
