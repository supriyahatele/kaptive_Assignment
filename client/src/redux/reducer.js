import { loginFailure, loginLoading, loginSuccess } from "./actionTypes"

const initialValue={
    isLoading:false,
    isError:false,
    isAuth:false,
    token:null,
    userName:null,
    role:null,
}

export const authReducer=(state=initialValue,{type,payload})=>{
    switch (type) {
        case loginLoading:
            return{
                ...state,
                isLoading:true
        }
        case loginSuccess:
            return{
                ...state,
                isLoading:false,
                isAuth:true,
                token:payload.refresh_token,
                userName:payload.username,
                role:payload.role
        }
        case loginFailure:
            return{
                ...state,
                isLoading:false,
                isError:true,
                isAuth:false,
                token:null,
                userName:null,
                role:null
        }     
        
        default:
          return  state;
    }
}

const initVal={
    isLoading:false,
    isError:false,
    isAuth:false,
    token:null,
    userName:null,
    role:null,
}

export const registerReducer=(state=initialValue,{type,payload})=>{
    switch (type) {
        case loginLoading:
            return{
                ...state,
                isLoading:true
        }
        case loginSuccess:
            return{
                ...state,
                isLoading:false,
                isAuth:true,
                token:payload.refresh_token,
                userName:payload.username,
                role:payload.role
        }
        case loginFailure:
            return{
                ...state,
                isLoading:false,
                isError:true,
                isAuth:false,
                token:null,
                userName:null,
                role:null
        }     
        
        default:
          return  state;
    }
}