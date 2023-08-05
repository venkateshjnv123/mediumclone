import { configureStore } from '@reduxjs/toolkit'
import { membershipreducer, viewReducer } from './reduxslice'

export default configureStore({
  reducer: {
 views : viewReducer,
 membership : membershipreducer,
  },
})
