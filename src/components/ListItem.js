import React, {useEffect} from 'react';
import {Box, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {getDetailsFromIdAsync} from "../redux/Slice";

const ListItem = ({title, titleType, year, id}) => {



    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getDetailsFromIdAsync({id}))
    }, [])


    return (
        <Card>
            <CardHeader title={title} subheader={titleType}/>
            <CardContent>
                <Typography variant="subtitle1">{year}</Typography>
            </CardContent>
        </Card>
    );
};

export default ListItem;