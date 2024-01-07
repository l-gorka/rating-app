import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from 'src/api'

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
  const response = await axiosInstance.get('/categories')
  return response.data;
});

export const { reducer } = app;
export default app.reducer