import React from 'react';
import {Box, Card, CardHeader, CardMedia, Typography} from "@mui/material";

const ListItem = ({title, titleType, year}) => {
    return (
        <Card>
            <CardHeader title={title} subheader={titleType}/>
            {/*<CardMedia component="img" height="194"/>*/}
            <Typography variant="subtitle1">{year}</Typography>
        </Card>
    );
};

export default ListItem;