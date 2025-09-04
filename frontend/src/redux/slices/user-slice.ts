import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token:string;
    stateUser: any
}

function loadUserFromStorage(): AuthState {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("authToken") || "";
    const user = localStorage.getItem("");
    return {
      token,
      stateUser: user ? JSON.parse(user) : null,
    };
  }
  return { token: "", stateUser: null };
}

const initialState: AuthState = loadUserFromStorage();


export const userSlice= createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        login: (state,action:PayloadAction<{token:string,user:User}>)=>{

            state.token= action.payload.token;
            state.stateUser=action.payload.user;
            localStorage.setItem("authToken",action.payload.token)
            localStorage.setItem("authUser",JSON.stringify(action.payload.user))

        },
        logout: (state)=>{
            state.token= "";
            state.stateUser= null;
            localStorage.removeItem("authToken")
            localStorage.removeItem("authUser")
        },
        setUser: (state,action:PayloadAction<User>)=>{
            state.stateUser=action.payload;
        },
        setToken: (state,action:PayloadAction<string>)=>{
             state.token= action.payload
            localStorage.setItem("authToken",action.payload)


        }

    }
})

export const {login,logout,setToken,setUser}= userSlice.actions
export default userSlice.reducer;