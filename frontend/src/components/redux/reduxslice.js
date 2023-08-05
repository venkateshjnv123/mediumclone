import { createSlice } from '@reduxjs/toolkit'

export const ViewSlice = createSlice({
  name: 'views',
  initialState: {
    value: 0,
  },
  reducers: {
    setviewValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const membershipSlice = createSlice({
    name: 'membership',
    initialState: {
      value: false,
    },
    reducers: {
      setmembershipValue: (state, action) => {
        state.value = action.payload
      },
    },
  })

  export const usernameSlice = createSlice({
    name: 'username',
    initialState: {
      value: '',
    },
    reducers: {
      setusernameValue: (state, action) => {
        state.value = action.payload
      },
    },
  })

  export const nameSlice = createSlice({
    name: 'name',
    initialState: {
      value: '',
    },
    reducers: {
      setnameValue: (state, action) => {
        state.value = action.payload
      },
    },
  })

  export const loggedinSlice = createSlice({
    name: 'loggedin',
    initialState: {
      value: false,
    },
    reducers: {
      setloggedinValue: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
// Action creators are generated for each case reducer function
export const {setviewValue} = ViewSlice.actions
export const {setmembershipValue} = membershipSlice.actions
export const {setusernameValue} = usernameSlice.actions
export const {setnameValue} = nameSlice.actions
export const {setloggedinValue} = loggedinSlice.actions

const viewReducer = ViewSlice.reducer
const membershipreducer = membershipSlice.reducer
const usernamereducer = usernameSlice.reducer
const namereducer = nameSlice.reducer
const loggedinreducer = loggedinSlice.reducer
export {viewReducer, membershipreducer, usernamereducer, namereducer, loggedinreducer};
