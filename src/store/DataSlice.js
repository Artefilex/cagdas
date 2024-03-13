import { createSlice } from "@reduxjs/toolkit";
import { Ask_Data } from "../mock/Data";

const initialState = {
  data: Ask_Data,
};

const questionSlice = createSlice({
  name: "questionSlicer",
  initialState,
  reducers: {
    // setVisibel : (state, action) => {
       
    // }
  },
});

export const {setVisibel} = questionSlice.actions

export default questionSlice.reducer