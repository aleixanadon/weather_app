import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IInputSearch {
    inputValue: string
}

interface IInputSearchState {
    inputValue: string
}

const initialState: IInputSearchState = {
    inputValue: "",
};

export const InputSearchSlice = createSlice({
    name: "inputSearch",
    initialState,
    reducers: {
        searchCityByName: (state, action: PayloadAction<{ inputValue: string }>) => {
            state.inputValue = action.payload.inputValue
        }
    }
});

export default InputSearchSlice.reducer;
export const { searchCityByName } = InputSearchSlice.actions;