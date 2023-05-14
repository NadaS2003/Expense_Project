import {createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import axios from "axios";

// login action 
export const loginUserAction = createAsyncThunk("user/login",async (payload,{rejectWithValue,getState,dispatch})=>{
  const config = {
    headers:{
      "Content-Type":"application/json"
    }
  }
    try{
      //make http call here
      const {data} = await axios.post("http://localhost:5000/api/users/login",payload,config);
        return data;
    }catch(error){
      if(!error?.response){
          throw error;
      }

      return rejectWithValue(error?.response?.data);
    }
});

// slices 
  const usersSlice =  createSlice({
    name:"users",
    initialState:{},
    extraReducers : builder =>{
      // handle pinding slices
        builder.addCase(loginUserAction.pending,(state,action)=>{
          state.userLoading = true;
          state.userAppErr = undefined;
          state.userServerErr = undefined;
        });
      // handle success state
        builder.addCase(loginUserAction.fulfilled,(state,action)=>{
          state.userAuth = action?.payload;
          state.userLoading = false;
          state.userAppErr = undefined;
          state.userServerErr = undefined;
        });
      // handle rejected state
        builder.addCase(loginUserAction.rejected,(state,action)=>{
          state.userLoading = false;
          state.userAppErr = action?.payload?.message;
          state.userServerErr = action?.error?.message;
        });
    }});

  export default usersSlice.reducer ;