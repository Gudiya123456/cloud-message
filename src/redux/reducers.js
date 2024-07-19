import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token:localStorage.getItem('token'),
    // token:'helloooo',
    data:localStorage.getItem('data'),
}

const todoSlice = createSlice({
  name: "todos",
  initialState:initialState,
  reducers: {
    setToken(state, { payload }) {
        localStorage.setItem('token', payload);
        state.token = payload;
    },
   setData(state, { payload }) {
        localStorage.setItem('data', JSON.stringify(payload));
        state.data = payload;
    },
  },
});

export const { setToken,setData} = todoSlice.actions;
export default todoSlice.reducer;