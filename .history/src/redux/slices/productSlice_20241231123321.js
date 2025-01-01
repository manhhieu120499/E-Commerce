import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState, 
    reducers:{
        setProduct: (state, action) => {
            return {...state}
        }
    }
})

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;