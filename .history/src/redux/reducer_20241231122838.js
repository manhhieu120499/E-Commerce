import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

export const slice = createSlice({
    name: 'mainSlice',
    initialState, 
    reducers:{
        setProduct: (state, action) => {}
    }
})

export const { setProduct } = slice.actions;

export default slice.reducer;