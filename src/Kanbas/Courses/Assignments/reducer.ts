import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

const initialState = {
  // assignments: assignments,
  assignments: [] as any[], // Array of assignments
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
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;