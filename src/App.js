import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, TextField} from "@mui/material";
import {getSmthFromImdbAsync} from "./redux/Slice";
import List from "./components/List";




const App = () => {

    const [title, setTitle] = useState("");

    const dispatch = useDispatch();



    const handleDispatch = () =>{
        dispatch(getSmthFromImdbAsync({title:title}))
    }


    return (
        <div>
            <TextField
                variant="filled"
                label="Title of movie"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Button onClick={handleDispatch} variant="contained" color="primary">Send</Button>
            <List/>
        </div>
    );
};

export default App;