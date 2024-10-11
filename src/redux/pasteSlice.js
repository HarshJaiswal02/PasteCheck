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
    updateToPastes: (state) => {},
    resetAllPastes: (state, action) => {},
    removeFromPastes: (state, action) => {},
  },
});

export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
