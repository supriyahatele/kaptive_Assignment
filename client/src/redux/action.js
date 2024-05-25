import { loginFailure, loginLoading, loginSuccess } from "./actionTypes"


export const PostLogin=(data)=>{
    return async(dispatch)=>{
        dispatch({type:loginLoading})
        try{
            const res= await axios.post("https://reqres.in/api/login",data)
            console.log(res.data.token)
            dispatch({type:loginSuccess,payload:res.data.token})
           
        }catch(e){
            dispatch({type:loginFailure})
        }
    }
 }