import { configureStore } from "@reduxjs/toolkit";
import { InputSearchSlice } from "./searchInputSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        inputValue: InputSearchSlice.reducer
    }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;