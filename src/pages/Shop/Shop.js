import React from 'react';
import { Container, Typography, Grow, Box} from '@material-ui/core';
import { useParams } from "react-router-dom";

import Categories from '../../components/Categories/Categories';

const Shop = () => {

    const { shopName, userName } = useParams();

    return (
        <Container maxWidth='lg'>
            <Box sx={{ mt: 12}}/>
            <Typography variant='h1' color="secondary">
                Catálogo
            </Typography>
            <Grow in>
                <Categories shopName={shopName} userName={userName}/>
            </Grow>
        </Container>
    )
}

export default Shop;