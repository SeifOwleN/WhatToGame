import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Games } from "../types";

export interface CounterState {
  value: Games;
}

const initialState: CounterState = {
  value: {},
};

export const searchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<Games>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
