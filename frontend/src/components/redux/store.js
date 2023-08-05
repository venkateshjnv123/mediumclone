import { configureStore } from '@reduxjs/toolkit'
import { loggedinreducer, membershipreducer, namereducer, usernamereducer, viewReducer } from './reduxslice'

export default configureStore({
  reducer: {
 views : viewReducer,
 membership : membershipreducer,
 username : usernamereducer,
 name : namereducer,
 loggedin : loggedinreducer
  },
})
