import React from 'react';
import { Container, Typography, Grow, Box} from '@material-ui/core';

import Categories from '../../components/Categories/Categories';



const Shop = () => {

    return (
        <Container maxWidth='lg'>
            <Box sx={{ p: 4}}/>
            <Typography variant='h1' color="secondary">
                Catálogo
            </Typography>
            <Box sx={{ p: 1}}/>
            <Grow in>
                <Categories/>
            </Grow>
        </Container>
    )
}

export default Shop;