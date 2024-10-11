import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      console.log("ADD paste", action.payload);
      const notes = action.payload;
      console.log(state.pastes);
      state.pastes.push(notes);
      console.log(state.pastes);
      //   state.pastes.push(notes);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created Successfully");
    },
    updateToPastes: (state, action) => {
      const note = action.payload;
      const pastes = state.pastes;
      const index = pastes.findIndex((data) => data._id === note._id);

      if (index >= 0) {
        state.pastes[index] = note;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Note Updated Successfully");
      } else {
        console.log(index);
        toast.error("Some error occurred while updating");
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) => {
      const note = action.payload;

      const index = state.pastes.findIndex((data) => data._id === note._id);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Removed Successfully");
      } else {
        toast.error("Error while removing");
      }
    },
  },
});

export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
