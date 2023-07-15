import { combineReducers, createStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.ts"

const reducer = combineReducers({
  counter: counterSlice.reducer,
})

const store = createStore(reducer)
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default store;
