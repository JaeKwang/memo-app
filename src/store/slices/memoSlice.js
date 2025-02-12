import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memos: [],
};

const memoSlice = createSlice({
  name: "memos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.memos.push({
        id: action.payload.id,
        title: action.payload.title,
        contents: action.payload.contents,
      });
    },
    remove: (state, action) => {
      const idx = state.memos.findIndex((v) => v.id === action.payload.id);
      if (idx > -1) state.memos.splice(idx, 1);
    },
    update: (state, action) => {
      const idx = state.memos.findIndex((v) => v.id === action.payload.id);
      if (idx > -1) {
        state.memos[idx].title = action.payload.title;
        state.memos[idx].contents = action.payload.contents;
      }
    },
  },
});

export const { add, remove, update } = memoSlice.actions;
export default memoSlice.reducer;
