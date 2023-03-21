import { createStore } from '@reduxjs/toolkit'

const initialState = {
  likes: 1
}

const reducer = (state = initialState, action) => {
  console.log('reducer', action)
  return state
}

const store = createStore(reducer)

export default store
