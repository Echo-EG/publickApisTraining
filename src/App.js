import React, {useState} from 'react';
import {Button, Container, CssBaseline, Grid, TextField} from "@mui/material";
import List from "./components/List";
import Header from "./components/Header";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import TopMovies from "./pages/topMovies";
import TopShows from "./pages/topShows";


const App = () => {




    return (
        <CssBaseline>
            <Router>
                <Header/>
                <Container maxWidth="lg">
                    <Switch>
                        {/*<Container maxWidth="lg">*/}
                        <Route exact path="/" component={MainMenu}/>
                        <Route path="/movies" component={TopMovies}/>
                        <Route path="/shows" component={TopShows}/>
                        {/*<Route  path="/list" component={List}/>*/}
                        <Route path="*" component={MainMenu}/>
                    </Switch>
                    <List/>
                </Container>
            </Router>
        </CssBaseline>
    );
};

export default App;