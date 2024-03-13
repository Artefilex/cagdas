import { createSlice } from "@reduxjs/toolkit";
import { Ask_Data } from "../mock/Data";

const initialState = {
  askData: Ask_Data,
  singelData: null
};

const questionSlice = createSlice({
  name: "questionSlicer",
  initialState,
  reducers: {
     setSingleData : (state, action) => {
         state.singelData = state.askData.find((item) => item.id === action.payload)
    }
  },
});

export const {setSingleData} = questionSlice.actions

export default questionSlice.reducer