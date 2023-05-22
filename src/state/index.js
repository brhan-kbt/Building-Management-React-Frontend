import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  userId: "",
  pricing: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setPricing: (state, action) => {
      state.pricing = action.payload;
    },
    setLoggedInUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setMode, setPricing,setLoggedInUserId } = globalSlice.actions;

export default globalSlice.reducer;
