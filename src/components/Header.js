import React, {useState} from 'react';
import {
    AppBar,
    Button,
    Container,
    CssBaseline,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Toolbar
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from "react-redux";
import {getMoviesByTitleAsync} from "../redux/Slice";
import {Link} from "react-router-dom";




const useStyles = makeStyles({
    toolbar:{
        background: "black",
    },
    img:{
        maxHeight: "90px",
        maxWidth: "90px"
    },
    textfield:{
        background:"white",
        borderRadius:"10px",
    },
    container:{
        // display:"flex",
        // alignItems:"center",
        background:"black"

    }
})

const Header = () => {

    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const dispatch = useDispatch();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    const handleDispatch = () =>{
        dispatch(getMoviesByTitleAsync({title}))
    }

    return (


    <AppBar position="sticky" style={{background:"black"}}>
        <Container maxWidth="lg" >
            <Toolbar>
                <img className={classes.img}
                     src="../img/logo.png"
                     alt="logo"/>
                <IconButton
                    onClick={handleMenu}
                    // get handleMenu from material ui example
                    size="large"
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon fontSize="large"/>
                </IconButton>
                <Menu anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}>
                    <MenuItem as={Link} to="/" onClick={handleClose}>Main menu</MenuItem>
                    <MenuItem as={Link} to="/movies" onClick={handleClose}>Top movies</MenuItem>
                    <MenuItem as={Link} to="/shows" onClick={handleClose}>Top shows</MenuItem>
                </Menu>

                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    className={classes.textfield}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <Button onClick={handleDispatch} sx={{m: 1}} style={{background: "white", borderRadius: "10px"}}
                        size="large"><SearchIcon/></Button>
            </Toolbar>
        </Container>
    </AppBar>


    );
};

export default Header;