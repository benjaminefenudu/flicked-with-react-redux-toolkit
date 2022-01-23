import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = null;

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialStateValue;
    },

    editprofile: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { login, logout, editprofile } = userSlice.actions;

export default userSlice.reducer;
