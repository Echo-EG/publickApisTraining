import React from 'react';
import {Box, Typography} from "@mui/material";

const ListItem = ({title, starting, id}) => {
    return (
        <Box>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="subtitle1">{starting}</Typography>
        </Box>
    );
};

export default ListItem;