import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     products: [],
// }

// export const productSlice = createSlice({
//     name: 'productSlice',
//     initialState, 
//     reducers:{
//         setProduct: (state, action) => {
//             return {...state}
//         }
//     }
// })

const initialState = {
    value: 0
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        increase: (state, action) => {
            return {...state, value: state.value + 1}
        }
    }
})

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;