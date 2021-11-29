import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const host = 'imdb8.p.rapidapi.com'
const key = '9d2276bf14msh1d2a9c52bce377dp141e96jsn37ab4ea01f23'

export const getMoviesByTitleAsync = createAsyncThunk(
    "getMovies/getMoviesByTitleAsync",
    async (payload) =>{

        const response = await fetch(`https://imdb8.p.rapidapi.com/title/find?q=${payload.title}`,{
            method: "GET",
            headers:{
                "content-type": "application/json",
                'x-rapidapi-host': host,
                'x-rapidapi-key': key
            },

        })
        if(response.ok){

            const a = await response.json();
            const imdbResponse = a.results
            return {imdbResponse}
        }
    }
)

export const getTopRatedMoviesAsync = createAsyncThunk(
    "getMovies/getTopRatedMoviesAsync",
    async (payload) =>{
        const response = await fetch("https://imdb8.p.rapidapi.com/title/get-top-rated-movies", {
            method: "GET",
            headers: {
                "x-rapidapi-host": host,
                "x-rapidapi-key": key
            },
            // params:{
            //     _limit : 10
            // }
        })
        if(response.ok){

            const topRated = await response.json()
            const limitList = [...topRated];
            const deleted = limitList.splice(0, 11);
            return {deleted};
            // return await response.json();
        }
    }
)

export const getDetailsFromIdAsync = createAsyncThunk(
    "getDetails/getDetailsFromIdAsync",
    async (payload) =>{

        const afterSplit =  await payload.id.split("/title/").pop();
        const finalString =  await afterSplit.slice(0, 9);
        const response = await fetch(`https://imdb8.p.rapidapi.com/title/get-details?tconst=${finalString}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": key,
                "x-rapidapi-key": host
            }
        })
        if (response.ok){
            const smth = await response.json();
            return {smth}
        }
    }
)


export const imdbSlice = createSlice({
    name:"imdbSlice",
    initialState:[],
    reducers:{

    },
    extraReducers:(builder) =>{
        builder.addCase(getMoviesByTitleAsync.fulfilled, (state, action) =>{
            return action.payload.imdbResponse;
        })
        builder.addCase(getTopRatedMoviesAsync.fulfilled, (state, action) =>{
            return action.payload.deleted;
        })
        builder.addCase(getDetailsFromIdAsync.fulfilled, (state, action) =>{
            return action.payload.smth;
        })
    }
})

export default imdbSlice.reducer;