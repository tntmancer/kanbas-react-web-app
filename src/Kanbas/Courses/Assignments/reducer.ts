import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Action carries payload for details of the assignment
    addAssignment: (state, { payload: assignment }) => {
      
      state.assignments = [...state.assignments, {
        ...assignment,
        _id: new Date().getTime().toString(),
      }];
      console.log(state.assignments);
    },
    deleteAssignment: (state, { payload: aid }) => {
      state.assignments = state.assignments.filter((a) => a._id !== aid);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
      console.log(state.assignments);
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;