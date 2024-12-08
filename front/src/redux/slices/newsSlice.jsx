import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getArticles = createAsyncThunk('articles/getArticles', async ()=>{
    try {
        const res = await fetch('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&sort=EARLIEST&limit=10&apikey=52W558I1QHD7V5WU')
        const data = await res.json()

        return data.feed
    } catch(error) {
        // bad
        console.log(error)
    }
})

const allArticles = createSlice({
    name : "articles",
    initialState : {articles : [] , iswaiting:false},
    extraReducers :(builder) => {

        builder
            .addCase(getArticles.fulfilled , (state , action)=>{
                state.articles = (action.payload)
                console.log(state)
                // state.articles.length = 10
            }) 
    }
})

export default allArticles.reducer