import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const host = 'imdb8.p.rapidapi.com'
const key = '9d2276bf14msh1d2a9c52bce377dp141e96jsn37ab4ea01f23'

export const getSmthFromImdbAsync = createAsyncThunk(
    "smth/getSmthFromImdbAsync",
    async (payload) =>{

        const response = await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${payload.title}`,{
            method: "GET",
            headers:{
                "content-type": "application/json",
                'x-rapidapi-host': host,
                'x-rapidapi-key': key
            },
            // body: JSON.stringify({title: payload.title})
        })
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(err => {
        //     console.error(err);
        // });
        if(response.ok){

            const imdbResponse = await response.json();
            const smth = imdbResponse.d
            return {smth}
            // return response
            // return await response.json()

        }
    }
)

export const imdbSlice = createSlice({
    name:"imdbSlice",
    initialState:[],
    reducers:{

    },
    extraReducers:(builder) =>{
        builder.addCase(getSmthFromImdbAsync.fulfilled, (state, action) =>{
            return action.payload.smth;
        })
    }
})

export default imdbSlice.reducer;