import {createSlice } from '@reduxjs/toolkit'



const initialAuthState = {
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers:{
        setLogin(state , action){
            state.user = action.payload.user
            state.isAuthenticated = true
        },
        setLogout(state){
            state.user = null
            state.isAuthenticated = false
        },
    }

})


export const {setLogin , setLogout } = authSlice.actions
export default authSlice.reducer