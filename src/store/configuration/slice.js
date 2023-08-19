
import { createSlice } from '@reduxjs/toolkit'
import { fetchConfiguration } from './thunk';

const initialState = {
    imageConfig: {}
}

const configurationSlice = createSlice({
  name: 'configuration',
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
    builder.addCase(fetchConfiguration.pending, (state, action) => {
        state.loading  = true;
    })
    .addCase(fetchConfiguration.fulfilled, (state, action) => {
        const {images} = action.payload;
        state.imageConfig = images;
    })
    .addCase(fetchConfiguration.rejected, (state, action) => {
        state.error = "Something went wrong";
        state.movies = [];
        state.movie = {}
    })
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
// export const { todoAdded, todoToggled } = moviesSlice.actions

// Export the slice reducer as the default export
export default configurationSlice.reducer