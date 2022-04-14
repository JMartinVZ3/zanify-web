import React from 'react';
import { Container, AppBar, Typography, Grow} from '@material-ui/core';

import Categories from './components/Categories/Categories';
import useStyles from './styles';



const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static'>
                <Typography className={classes.heading} variant='h2' align="center">Zanify</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Categories/>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;