import React from 'react';

import { Container, Typography, Grow, Box} from '@material-ui/core';

import { useRouter } from 'next/router'


import Categories from '../../../components/Categories/Categories';

const Shop = () => {

    const router = useRouter()
    const { shopName, userName } = router.query;

    console.log(shopName);

    console.log(userName);

    return (
        <Container maxWidth='lg'>
            <Box sx={{ mt: 12}}/>
            <Typography variant='h1' color="secondary">
                Catálogo
            </Typography>
            <Grow in>
                <Categories shopName={"volva"} userName={"test2"}/>
            </Grow>
        </Container>
    )
}

export default Shop;