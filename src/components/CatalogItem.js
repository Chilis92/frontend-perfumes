/*
import React from 'react';

const CatalogItem = ({ item }) => {
    return (
        <div className="catalog-item">
            <img src={`data:image/jpeg;base64,${item.file.data}`} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Brand: {item.brand}</p>
        </div>
    );
};

export default CatalogItem;
*/

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CatalogItem = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={`data:image/jpeg;base64,${item.file.data}`}
                alt={item.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Brand: {item.brand}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CatalogItem;
