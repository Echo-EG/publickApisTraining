import React, {useEffect} from 'react';
import {Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getDetailsFromIdAsync, getTopRatedMoviesAsync} from "../redux/Slice";

const TopMovies = () => {

    const dispatch = useDispatch();

    // const topMovies = useSelector((state) =>{
    //     return state.imdbState;
    // })

    useEffect(() =>{
        dispatch(getTopRatedMoviesAsync())
    }, [])


    return (
        // <Container maxWidth="lg">
            <Typography variant="h1">Top Movies</Typography>
        // </Container>
    );
};

export default TopMovies;