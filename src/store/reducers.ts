import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import client from 'src/api'

import { listCategories, itemsByDate } from 'src/graphql/queries'

import { Category, Item, ModelSortDirection} from 'api'

const app = createSlice({
  name: 'app',
  initialState: {
    categoriesStatus: 'idle',
    categoriesList: [] as Category[],
    itemsStatus: 'idle',
    itemsList: [] as Partial<Item>[],
    userEmail: '',
    routeAnimation: 'right',
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload
    },
    setRouteAnimation: (state, action) => {
      state.routeAnimation = action.payload
    },
    setFormData: (state, action) => {
      console.log(action.payload)
      state.formData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesList = action.payload
        state.categoriesStatus = 'fullfilled'
      })
    .addCase(fetchCategories.pending, (state) => {
       state.categoriesStatus = 'pending'
    })
    .addCase(fetchAllItems.pending, (state) => {
       state.itemsStatus = 'pending'
    })
    .addCase(fetchAllItems.fulfilled, (state, action) => {
       state.itemsList = action.payload
       state.itemsStatus = 'fullfilled'
    })
  }
})

export const fetchCategories = createAsyncThunk('app/fetchCategories', async () => {
  try {
    const {data} =  await client.graphql({query: listCategories});

    return data.listCategories.items;
  } catch (error) {
    return []
  }
});

export const fetchAllItems = createAsyncThunk('app/fetchAllItems', async () => {
  try {
    const sortDirection = 'DESC' as ModelSortDirection
    const {data} =  await client.graphql({query: itemsByDate, variables: {type: 'Item', sortDirection}});

    return data.itemsByDate.items;
  } catch (error) {
    return []
  }
})

export const { reducer } = app;
export const { setUserEmail, setRouteAnimation, setFormData } = app.actions;
export default app.reducer

export type IRootState = ReturnType<typeof app.reducer>
