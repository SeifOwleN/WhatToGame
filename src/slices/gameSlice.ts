import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
	value: string;
}

const initialState: CounterState = {
	value: "",
};

export const searchSlice = createSlice({
	name: "Search",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
