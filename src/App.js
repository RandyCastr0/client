import React from "react";
import { Container, AppBar, Typography, Grow, Box, Grid } from '@mui/material';
import memories from './images/memories.png'
import Form from "./component/Posts/Form/Form";
import Posts from "./component/Posts/Post/Post";
import styles from './styles';
import FormStyles from "./component/Posts/Form/styles";
import postsStyle from "./component/Posts/style";

const App = () => {
return(
    
   <Container maxWidth="lg">
    <AppBar position="static" color="inherit" sx={styles.AppBarStyle}>
        <Typography variant="h2" align="center" sx={styles.headingStyle}>Memories</Typography>
        <img src={memories} alt="memories" height="60" sx={styles.imageStyle} />
    </AppBar>
    <Grow in>
        <Container>
            <Box container justify="space-between" alignItems={"stretch"} spacing={3}>
                <Box item xs={12} sm={7}>
                    <Posts sx={postsStyle} />
                </Box>

                <Box item xs={12} sm={4}>
                    <Form sx={FormStyles} />
                </Box>

            </Box>
        </Container>
    </Grow>

   </Container>
)
};

export default App;