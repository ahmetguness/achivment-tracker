import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  userType: "parent" | "child" | "guest" | "existingUser" | "";
}

const initialState: UserState = {
  userType: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { setUserType } = UserSlice.actions;
