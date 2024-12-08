import { configureStore } from "@reduxjs/toolkit";
import allArticles from './slices/newsSlice'
const store = configureStore({
    reducer: {
        allArticles
    }
})
export default store ; 