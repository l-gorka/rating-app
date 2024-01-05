import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const app = createSlice({
  name: 'app',
  initialState: {
    status: 'idle',
    categoriesList: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesList = action.payload
        state.status = 'fullfilled'
      })
    .addCase(fetchCategories.pending, (state, action) => {
       state.status = 'pending'
    })
  }
})

export const fetchCategories = createAsyncThunk('app/fetchCategories', async () => {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  await new Promise(resolve => setTimeout(resolve, 1000));
  return data;
});
export const { reducer } = app;
export default app.reducer