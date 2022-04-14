import React, {useState}  from "react";

import { Box, Container, Typography, FormControl, InputLabel, 
    Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';

const ShoppingCartObject = ({product}) => {

    const classes = useStyles();

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        
        <Container className={classes.row}>
            <Box
                className={classes.box}
                component="img"
                sx={{
                  height: 130,
                  width: 130,
                  maxHeight: { xs: 130, md: 130 },
                  maxWidth: { xs: 130, md: 130 },
                }}
                alt="The house from the offer."
                src= {product.images_url[0] =! null ? product.images_url[0] : "https://www.infobae.com/new-resizer/xHORBTTOvi76_TX7OOanBUblR-0=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"}
            />
            <Container className={classes.column}>
                <Typography variant="h4" color="secondary">{product.title}</Typography>
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
                    <Typography variant="body1" color="primary">Disponible</Typography>
                </Box>
            </Container>
        </Container>
        
    )

}

export default ShoppingCartObject;