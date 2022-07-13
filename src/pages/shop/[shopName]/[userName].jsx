import React from 'react';

import { Typography, Grow } from '@material-ui/core';

import { useRouter } from 'next/router'


import Categories from '../../../components/Categories/Categories';

import useStyles from "./styles";

const Shop = () => {

    const classes = useStyles();

    const router = useRouter();

    const { shopName, userName } = router.query;

    return (
        <div className={classes.container}>
            <div className={classes.sizedBox}/>
            <Typography variant='h1' color="secondary">
                Catálogo
            </Typography>
            <Grow in>
                <Categories userName={userName} shopName={shopName}/>
            </Grow>
        </div>
    )
}

export default Shop;