import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface results {
  background_image: string;
  name: string;
  added: number;
}

export interface data {
  count: number;
  results: results;
  user_platform: boolean;
}

export interface CounterState {
  value: data;
}

const initialState: CounterState = {
  value: {},
};

export const searchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<data[]>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
