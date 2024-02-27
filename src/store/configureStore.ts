import { configureStore } from '@reduxjs/toolkit'
import app from './reducers';

import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: app
})

export default store

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()