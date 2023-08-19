import { createSlice } from '@reduxjs/toolkit'
import { fetchMovies, fetchMovie, searchMovies, getCredits } from './thunk';

const initialState = {
    loading: false,
    movies: [],
    movie: {},
    credits: {}
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  // reducers: {
  //   // Give case reducers meaningful past-tense "event"-style names
  //   todoAdded(state, action) {
  //     const { id, text } = action.payload
  //     // "Mutating" update syntax thanks to Immer, and no `return` needed
  //     state.todos.push({
  //       id,
  //       text,
  //       completed: false
  //     })
  //   },
  //   todoToggled(state, action) {
  //     // Look for the specific nested object to update.
  //     // In this case, `action.payload` is the default field in the action,
  //     // and can hold the `id` value - no need for `action.id` separately
  //     const matchingTodo = state.todos.find(todo => todo.id === action.payload)

  //     if (matchingTodo) {
  //       // Can directly "mutate" the nested object
  //       matchingTodo.completed = !matchingTodo.completed
  //     }
  //   }
  // },
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, (state, action) => {
        state.loading  = true;
    })
    .addCase(fetchMovies.fulfilled, (state, action) => {
        // console.log("payload", action.payload);
        const {results} = action.payload
        state.movies = results;
    })
    .addCase(fetchMovies.rejected, (state, action) => {
        state.error = "Something went wrong";
        state.movies = [];
        state.movie = {}
    })
    .addCase(fetchMovie.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
    })
    .addCase(fetchMovie.rejected, (state, action) => {
      state.error = "Something went wrong!"
    })
    .addCase(searchMovies.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(searchMovies.fulfilled, (state, action) => {
      const {results} = action.payload
      state.movies = results;
    })
    .addCase(searchMovies.rejected, (state, action) => {
      state.error = "Something went wrong!"
    })
    .addCase(getCredits.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getCredits.fulfilled, (state, action) => {
      state.credits = action.payload;
    })
    .addCase(getCredits.rejected, (state, action) => {
      state.error = "Something went wrong!"
    })
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
// export const { todoAdded, todoToggled } = moviesSlice.actions

// Export the slice reducer as the default export
export default moviesSlice.reducer