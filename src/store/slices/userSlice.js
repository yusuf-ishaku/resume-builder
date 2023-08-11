import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUser: (state, action) =>{
            state[action.payload.target] = action.payload.value;
        },
        updateUserArray(state, action){
            let value = action.payload.value;
            let type = action.payload.target;
           if(state.infos){
            state.infos = [...state.infos, {value, type}]
           }else{
            state.infos = [{value, type}]
           }
        }
    }
});

export const {updateUser, updateUserArray} = userSlice.actions;

export default userSlice.reducer