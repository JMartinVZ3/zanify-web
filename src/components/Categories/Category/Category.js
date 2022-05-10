import React  from "react";
import { Typography } from '@material-ui/core';

const Category = ({ category }) => {


    return (
        <div style={{paddingBottom: '24px'}}>
            <Typography variant='h3' color="secondary">{category?.title}</Typography>
        </div>
            
    )

}

export default Category;