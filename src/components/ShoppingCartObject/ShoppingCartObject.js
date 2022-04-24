import React, {useState}  from "react";

import { Box, Container, Typography, FormControl, InputLabel, 
    Select, MenuItem, Button } from '@material-ui/core';

import useStyles from './styles';

import { useDispatch } from 'react-redux';

import { QuantityProduct, DeleteProduct } from '../../actions/shoppingCart';


const ShoppingCartObject = ({product}) => {

    const dispatch = useDispatch();

    const classes = useStyles();

    const [value, setValue] = useState(product.quantity);

    const loader = 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png'

    const image = product.images_url[0]? product.images_url[0] : `${loader}`

    const handleChange = (event) => {
        setValue(event.target.value);
        const data = {
            "category": product.category,
            "description": product.description,
            "images_url": product.images_url,
            "price": product.price,
            "title": product.title,
            "_id": product._id,
            "quantity": event.target.value
        }
        dispatch(QuantityProduct(data))
    }

    return (
        
        <Container className={classes.row} style={{padding: '16px 0px 16px 0px'}}>
            <Box
                
                className={classes.box}
                component="img"
                sx={{
                  height: 130,
                  width: 130,
                  minHeight: {xs: 130, md: 130},
                  minWidth: {xs: 130, md: 130},
                  maxHeight: { xs: 130, md: 130 },
                  maxWidth: { xs: 130, md: 130 },
                }}
                alt="producto"
                src= {image}
            />
            <Container className={classes.column}>
                <Box className={classes.rowProductTitle}>
                    <Typography variant="h4" color="secondary">{product.title}</Typography>
                    <Typography variant="h5" color="secondary">${product.price}</Typography>
                </Box>
                <Typography variant="body1" color="primary">Disponible</Typography>
                <Box className={classes.rowQuantity}>
                    <FormControl fullWidth>
                        <InputLabel id="Cantidad">Cantidad</InputLabel>
                        <Select
                            labelId="Cantidad"
                            id="Cantidad"
                            value={value}
                            label="Cantidad"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>

                        </Select>
                    </FormControl>
                    <Box sx={{mr: 2}}/>
                    <Button onClick={
                        () => {
                            dispatch(DeleteProduct(product))
                        }
                    }>Eliminar</Button>
                </Box>
            </Container>
        </Container>
        
    )

}

export default ShoppingCartObject;