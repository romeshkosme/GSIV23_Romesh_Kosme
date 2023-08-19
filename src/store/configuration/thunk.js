
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../../utils/axios.config";

export const fetchConfiguration = createAsyncThunk('movies/fetchConfiguration', async (payload) => {
    try {
        const res = await axios({
            url: '/configuration',
            method: "GET"
        })
        return res.data
    } catch (error) {
        console.log("error -", error);
    }
});