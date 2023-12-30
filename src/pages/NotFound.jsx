import { Container, Box, Typography} from "@mui/material";
import { Link as RouterLink,  } from "react-router-dom";

function NotFound() {
    return (
        <>
            <Container component='main' maxWidth='xl'  sx={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>
            <Box >
                <Typography  variant="h1" sx={{fontSize:250, display: 'flex', justifyContent: 'center'}}>
                    <strong>404</strong>
                </Typography>
                <Typography  variant="h4" sx={{display: 'flex', justifyContent: 'center',marginY: -5}}>
                    <strong>Page Not Found</strong>
                </Typography>
                <RouterLink to='/'>
                <Typography  variant="h6" sx={{display: 'flex', justifyContent: 'center', marginY: 10}}>
                    <strong>Back to Home</strong>
                </Typography>
                </RouterLink>
            </Box>
            </Container>
            
        </>
    )
}

export default NotFound