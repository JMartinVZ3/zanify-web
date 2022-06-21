import * as React from 'react';
import { Typography } from '@material-ui/core';

type CategoryProps = {
    category: {
        title: string
    },
}

const Category = ({ category }: CategoryProps) => {

    return (
        <div style={{paddingBottom: '24px'}}>
            <Typography variant='h3' color="secondary">{category?.title}</Typography>
        </div>
            
    )

}

export default Category;