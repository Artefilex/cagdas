import { createSlice } from "@reduxjs/toolkit";
import { Ask_Data } from "../mock/Data";

const initialState = {
  askData: Ask_Data,
  singelData: null,
  matched: null,
};

const questionSlice = createSlice({
  name: "questionSlicer",
  initialState,
  reducers: {
    setSingleData: (state, action) => {
      state.singelData = state.askData.find(
        (item) => item.id === action.payload
      );
    },
    setVisible: (state, action) => {
      const finddata = state.singelData.options.find((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      if (!finddata) {
        state.matched = false;
     
      } else {
        state.matched = true;
      }
      const updatedOptions = state.singelData.options.map((item) => {
        const doesMatch = item.title
          .toLowerCase()
          .includes(action.payload.toLowerCase());

        return {
          ...item,
          visibel: doesMatch ? true : item.visibel,
        };
      });

      state.singelData = {
        ...state.singelData,
        options: updatedOptions,
      };
    
    },
    setMatched : (state) => {
      state.matched = null
    }
  },
});

export const { setSingleData, setVisible ,setMatched } = questionSlice.actions;

export default questionSlice.reducer;
