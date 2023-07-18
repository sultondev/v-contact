import { combineReducers, createStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.ts"
import tagsReducer from './tagsSlice';

const reducer = combineReducers({
  counter: counterSlice.reducer,
  tags: tagsReducer,
})

const store = createStore(reducer)
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default store;
