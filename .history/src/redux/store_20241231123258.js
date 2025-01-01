import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./reducer";

const store = configureStore({
    reducer: productSlice
})

export default store;