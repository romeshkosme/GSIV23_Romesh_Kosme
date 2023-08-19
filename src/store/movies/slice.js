import { createSlice } from '@reduxjs/toolkit'
import { fetchMovies, fetchMovie, searchMovies, getCredits } from './thunk';

const initialState = {
    loading: false,
    movies: [],
    movie: {},
    credits: {},
    page: 1,
    total_pages: 0,
    search: ""
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch(state, action) {
      const search = action.payload;
      state.search = search;
    },
    resetMovies(state, action) {
      state.movies = [];
      state.page = 1;
      state.movie = {};
      state.total_pages = 0;
    }
  },
  extraReducers: builder => {
    builder
    // fetch movies
    .addCase(fetchMovies.pending, (state, action) => {
        state.loading = true;
    })
    .addCase(fetchMovies.fulfilled, (state, action) => {
        const {results, page, total_pages} = action.payload
        state.movies = [...state.movies, ...results];
        state.page = page;
        state.total_pages = total_pages;
        state.loading = false;
    })
    .addCase(fetchMovies.rejected, (state, action) => {
        state.error = "Something went wrong";
        state.movies = [];
        state.movie = {}
        state.loading = false;
    })
    // fetch movie
    .addCase(fetchMovie.pending, (state, action) => {
      state.loading = true;
      state.movie = {};
      state.movies = [];
      state.page = 1;
      state.total_pages = 0;
      state.search = "";
    })
    .addCase(fetchMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.loading = false;
    })
    .addCase(fetchMovie.rejected, (state, action) => {
      state.error = "Something went wrong!"
      state.loading = false;
    })
    // search movie
    .addCase(searchMovies.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(searchMovies.fulfilled, (state, action) => {
      const {results, page, total_pages} = action.payload
      state.movies = [...state.movies, ...results];
      state.page = page;
      state.total_pages = total_pages;
      state.loading = false;
    })
    .addCase(searchMovies.rejected, (state, action) => {
      state.error = "Something went wrong!"
      state.loading = false;
    })
    // get credit
    .addCase(getCredits.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getCredits.fulfilled, (state, action) => {
      state.credits = action.payload;
      state.loading = false;
    })
    .addCase(getCredits.rejected, (state, action) => {
      state.error = "Something went wrong!"
      state.loading = false;
    })
  }
})

export const { setSearch, resetMovies } = moviesSlice.actions

export default moviesSlice.reducer