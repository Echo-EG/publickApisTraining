import React from 'react';
import {useSelector} from "react-redux";
import ListItem from "./ListItem";
import {Grid} from "@mui/material";

const List = () => {

    const listWithInfo = useSelector((state) =>{
        return state.imdbState
    })



    return (
        <Grid container spacing={2}>
            {listWithInfo.map((newList, key)=>{
                return <Grid item lg={4} md={4} sm={6} xs={12} key={newList.id}>
                    <ListItem key={newList.id} title={newList.title} titleType={newList.titleType} year={newList.year} id={newList.id}/>
                </Grid>
            })}
        </Grid>
    );
};

export default List;