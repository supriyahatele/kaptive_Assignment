import { loginFailure, loginLoading, loginSuccess, registerFailure, registerLoading, registerSuccess } from "./actionTypes"

import axios from "axios"
export const PostLogin=(data)=>{
    return async(dispatch)=>{
        dispatch({type:loginLoading})
        try{
            const res= await axios.post("http://localhost:3000/users/login",data)
            console.log("post login called")
            console.log(res)

            dispatch({type:loginSuccess,payload:res.data.refresh_token})
           
        }catch(e){
            dispatch({type:loginFailure})
        }
    }
 }


 export const PostRegister=(data)=>{
    return async(dispatch)=>{
        dispatch({type:registerLoading})
        try{
            const res= await axios.post("http://localhost:3000/users/register",data)
            console.log("post login called")
            console.log(res)

            dispatch({type:registerSuccess})
           
        }catch(e){
            dispatch({type:registerFailure})
        }
    }
 }