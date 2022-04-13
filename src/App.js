import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getCategories } from './actions/categories';
import Categories from './components/Categories/Categories';
import { getProducts } from './actions/products';
import Products from './components/Products/Products';
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='"static' color="inherit">
                <Typography className={classes.heading} variant='h2' align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height="60"/>
            </AppBar>
            <Grow in>
                <Container>

                </Container>
            </Grow>
        </Container>
    )
}

export default App;