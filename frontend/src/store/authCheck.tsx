
import { AppDispatch } from "./index"
import { baseURL } from "../service"
import {  setLogin, setLogout } from "./authSlice"
import axios from "axios"



const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {
            const {data} = await axios.get(`${baseURL}users/showMe`, {withCredentials: true})
         
            console.log(data)
            if(data.success){
                dispatch(setLogin(data.user))                
            }else{
                dispatch(setLogout())  
            }

        } catch (error) {
            console.log(error)
            dispatch(setLogout())
        }
    }
}


export default checkAuthentication