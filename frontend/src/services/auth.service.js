import { apiRequest } from "./api.js";


export const loginUser= (data)=>{
    return apiRequest('/auth/login' , {
        method : "POST",
        body : JSON.stringify(data)
    });
};



export const signupUser = (data)=>{
    return apiRequest('/auth/register' ,{
        method : "POST",
        body:JSON.stringify(data),
    });
};