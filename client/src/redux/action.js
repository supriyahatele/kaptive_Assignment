import { BASE_URL } from "../config"
import { loginFailure, loginLoading, loginSuccess, registerFailure, registerLoading, registerSuccess } from "./actionTypes"

import axios from "axios"
export const PostLogin=(data)=>{
    return async(dispatch)=>{
        dispatch({type:loginLoading})
        try{
            const res= await axios.post(`${BASE_URL}/users/login`,data)
            // users/login

            dispatch({type:loginSuccess,payload:res.data})
           
        }catch(e){
            dispatch({type:loginFailure})
        }
    }
 }


 export const PostRegister=(data)=>{
    return async(dispatch)=>{   
        try{
            const res= await axios.post(`${BASE_URL}/users/register`,data)
            console.log("post register called")
            console.log(res)  
        }catch(e){
           
        }
    }
 }