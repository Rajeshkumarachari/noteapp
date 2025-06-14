import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  note: [],
};
const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.note.unshift(action.payload);
    },
    deleteAllNotes: (state) => {
      state.note = [];
    },
    deleteNote: (state, action) => {
      state.note = state.note.filter((note, index) => index !== action.payload);
    },
  },
});

export const { addNote, deleteAllNotes, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
