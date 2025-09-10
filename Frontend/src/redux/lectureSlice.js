import { createSlice } from "@reduxjs/toolkit";

const lectureSlice = createSlice({
  name: 'lecture',
  initialState: {
    lecture: [],
    currentLecture: null, // Add this to store the active lecture
  },
  reducers: {
    setLecture: (state, action) => {
      state.lecture = action.payload;  
    },
    // Add this reducer to update the current lecture
    setCurrentLecture: (state, action) => {
      state.currentLecture = action.payload;
    }
  }
});

export const { setLecture, setCurrentLecture } = lectureSlice.actions;
export default lectureSlice.reducer;