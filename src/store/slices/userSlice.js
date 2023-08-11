import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: "",
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUser: (state, action) =>{
            state.age = action.payload;
        }
    }
});

export const {updateUser} = userSlice.actions;

export default userSlice.reducer