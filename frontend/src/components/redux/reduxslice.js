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
  
// Action creators are generated for each case reducer function
export const {setviewValue} = ViewSlice.actions
export const {setmembershipValue} = membershipSlice.actions


const viewReducer = ViewSlice.reducer
const membershipreducer = membershipSlice.reducer

export {viewReducer, membershipreducer};
