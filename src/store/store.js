import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./DataSlice"
const store = configureStore({
    reducer: {
        DataReducer
    },
})

export default store