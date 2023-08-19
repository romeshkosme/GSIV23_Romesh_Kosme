import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../../utils/axios.config";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (page=1) => {
    try {
        const res = await axios({
            url: `/movie/upcoming?page=${page}`,
            method: "GET"
        })
        return res.data
    } catch (error) {
        console.log("error -", error);
    }
})

export const fetchMovie = createAsyncThunk('movies/fetchmovie', async (id, thunkAPI) => {
    try {
        const res = await axios({
            url: `/movie/${id}`,
            method: "GET"
        })
        if (res.data && res.data.id)
        thunkAPI.dispatch(getCredits(res.data.id));
        return res.data
    } catch (error) {
        console.log(error);
    }
})

export const searchMovies = createAsyncThunk('movies/searchmovie', async ({search, page=1}) => {
    try {
        const res = await axios({
            url: `search/movie?query=${search}&page=${page}`,
            method: "GET"
        })
        return res.data
    } catch (error) {
        console.log(error);
    }
})

export const getCredits = createAsyncThunk('movies/getCredits', async (id) => {
    try {
        const res = await axios({
            url: `movie/${id}/credits`,
            method: "GET"
        })
        return res.data
    } catch (error) {
        console.log(error);
    }
})