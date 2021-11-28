import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, CssBaseline, Grid, TextField} from "@mui/material";
import {getSmthFromImdbAsync} from "./redux/Slice";
import List from "./components/List";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import TopMovies from "./pages/topMovies";
import TopShows from "./pages/topShows";


const App = () => {




    return (
        <CssBaseline>
            <Router>
                <Switch>
                    <Header/>
                    <Container maxWidth="lg">
                        <Route exact path="/" component={MainMenu}/>
                        <Route exact path="/movies" component={TopMovies}/>
                        <Route exact path="/shows" component={TopShows}/>
                        <Route exact path="/list" component={List}/>
                        <List/>
                    </Container>
                </Switch>

            </Router>
        </CssBaseline>
    );
};

export default App;